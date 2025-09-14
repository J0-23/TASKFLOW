import { useTasks } from "@/context/taskContext";
import { edit, star, trash } from "@/utils/Icons";
import { Task } from "@/utils/types";
import { formatTime } from "@/utils/utilities";
import React from "react";
import { motion } from "framer-motion";
import { item } from "@/utils/animations";

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const { getTask, openModalForEdit, deleteTask, updateTask } = useTasks();

  const getPriorityColor = (priority: string, completed: boolean) => {
    if (completed) return "bg-gray-300"; // gray line for completed tasks
    switch (priority) {
      case "low":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "high":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <motion.div
      className={`relative h-[16rem] flex flex-col gap-4 shadow-md rounded-lg border border-gray-200 bg-white`}
      variants={item}
    >
      {/* Priority line */}
      <div
        className={`absolute top-0 left-0 w-full h-1 rounded-t-lg ${getPriorityColor(
          task.priority,
          task.completed
        )}`}
      />

      <div className="flex flex-col h-full px-4 py-4 gap-3">
        {/* Task content */}
        <div className="flex-1">
          <h4
            className={`text-xl font-semibold ${
              task.completed ? "text-gray-400 line-through" : "text-gray-900"
            }`}
          >
            {task.title}
          </h4>
          <p
            className={`text-gray-600 ${task.completed ? "line-through" : ""}`}
          >
            {task.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-auto">
          <p className="text-sm text-gray-400">{formatTime(task.createdAt)}</p>
          <p
            className={`text-sm font-semibold ${
              task.completed
                ? "text-gray-400"
                : task.priority === "low"
                ? "text-green-500"
                : task.priority === "medium"
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            {task.priority}
          </p>
          <div className="flex items-center gap-3 text-[1.2rem]">
            <button
              className={`${
                task.completed ? "text-yellow-400" : "text-gray-400 "
              }`}
            >
              {star}
            </button>

            {/* Edit */}
            <button
              className="text-sky-800 hover:text-blue-500 transition"
              onClick={() => {
                getTask(task._id);
                openModalForEdit(task);
              }}
            >
              {edit}
            </button>

            {/* Delete */}
            <button
              className="text-gray-500 hover:text-red-600 transition"
              onClick={() => deleteTask(task._id)}
            >
              {trash}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TaskItem;
