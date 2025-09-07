"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import { github, moon, profile } from "@/utils/Icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { user } = useUserContext();
  const { openModalForAdd, activeTasks } = useTasks();
  const { name } = user;
  const userId = user._id;

  return (
    <header className="px-6 my-4 w-full flex items-center justify-between bg-[#f9f9f9]">
      <div className="text-lg font-medium">
        <h1>{userId ? `Welcome, ${name}` : "Welcome to Task Flow"}</h1>
        <p className="text-sm">
          {userId ? (
            <>
              You have{" "}
              <span className="font-bold text-[#3aafae]">
                {activeTasks.length}
              </span>{" "}
              active tasks
            </>
          ) : (
            "Please login or register to view your tasks"
          )}
        </p>
      </div>
      <div className="h-[50px] flex items-center gap-[10.4rem]">
        <button
          className="px-8 py-3 bg-[#3aafae] text-white rounded-[50px]
        hover:bg-[#00A1F1] hover:text-white transition-all duration-200 ease-in-out"
          onClick={openModalForAdd}
        >
          Create a new Task
        </button>

        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/J0-23/TASKFLOW"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-[#355b88] rounded-full flex items-center justify-center text-2xl border-2 border-[#E6E6E6]"
          >
            {github}
          </Link>

          <Link
            href="https://github.com/J0-23/TASKFLOW"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-[#355b88] rounded-full flex items-center justify-center text-2xl border-2 border-[#E6E6E6]"
          >
            {moon}
          </Link>

          <Link
            href="https://github.com/J0-23/TASKFLOW"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-[#355b88] rounded-full flex items-center justify-center text-2xl border-2 border-[#E6E6E6]"
          >
            {profile}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
