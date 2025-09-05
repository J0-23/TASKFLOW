import moment from "moment";

export const formatTime = (createdAt: string) => {
  const now = moment();
  const created = moment(createdAt);

  // if task was created today
  if (created.isSame(now, "day")) {
    return "Today";
  }

  // if task was created yesterday
  if (created.isSame(now.subtract(1, "days"), "day")) {
    return "Yesterday";
  }

  // if task created within last 7 days
  if (created.isAfter(moment().subtract(6, "days"))) {
    return created.fromNow();
  }

  // if task created within last 4 weeks
  if (created.isAfter(moment().subtract(3, "weeks"), "week")) {
    return created.fromNow();
  }

  return created.format("DD/MM/YYYY");
};
