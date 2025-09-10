"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import { github, moon, profile } from "@/utils/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const { user } = useUserContext();
  const { openModalForAdd, activeTasks } = useTasks();
  const router = useRouter();
  const { name } = user;
  const userId = user._id;

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white">
      <div>
        <h1 className="text-xl font-semibold">
          {userId ? (
            <>
              Welcome to{" "}
              <span className="font-bold text-[#355b88]">Task Flow</span>,{" "}
              {name}
            </>
          ) : (
            <>
              Welcome to{" "}
              <span className="font-bold text-[#355b88]">Task Flow</span>
            </>
          )}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {userId ? (
            <>
              You have{" "}
              <span className="font-semibold text-[#355b88]">
                {activeTasks.length}
              </span>{" "}
              active tasks
            </>
          ) : (
            "Please login or register to view your tasks"
          )}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        <button
          className="px-5 py-2 bg-[#355b88] text-white rounded-lg 
        hover:bg-[#2a4669] transition-colors duration-200"
          onClick={() => {
            if (userId) {
              openModalForAdd();
            } else {
              router.push("/login");
            }
          }}
        >
          {userId ? "Add Task" : "Login / Register"}
        </button>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Project repo</span>
          <Link
            href="https://github.com/J0-23/TASKFLOW"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 flex items-center justify-center 
          text-[#355b88] text-2xl border border-gray-300 rounded-full 
          hover:bg-gray-50 transition-colors"
          >
            {github}
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
