import { useTasks } from "@/context/taskContext";
import React from "react";

function Filters() {
  const { priority, setPriority } = useTasks();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const priorities = ["All", "Low", "Medium", "High"];

  return (
    <div className="relative py-2 px-2 grid grid-cols-4 items-center gap-3 bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Active background indicator */}
      <span
        className="absolute left-[5px] bg-gray-200 rounded-lg"
        style={{
          width: "calc(100% / 4 - 10px)",
          height: "calc(100% - 10px)",
          top: "50%",
          transform: `translate(calc(${activeIndex * 100}% + ${
            activeIndex * 10
          }px), -50%)`,
          transition: "transform 300ms cubic-bezier(.95,.03,1,1)",
        }}
      ></span>

      {/* Filter buttons */}
      {priorities.map((priority, index) => (
        <button
          key={index}
          className={`relative z-10 px-2 py-1 text-sm font-medium rounded-md transition-colors ${
            activeIndex === index
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => {
            setActiveIndex(index);
            setPriority(priority.toLowerCase());
          }}
        >
          {priority}
        </button>
      ))}
    </div>
  );
}

export default Filters;
