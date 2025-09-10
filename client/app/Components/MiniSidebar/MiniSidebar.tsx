"use client";

import IconCheck from "@/public/icons/IconCheck";
import IconDeleteAll from "@/public/icons/IconDeleteAll";
import IconFileCheck from "@/public/icons/IconFileCheck";
import IconGrid from "@/public/icons/IconGrid";
import IconStopwatch from "@/public/icons/IconStopwatch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MiniSidebar() {
  const pathname = usePathname();

  const getStrokeColor = (link: string) => {
    return pathname === link ? "#4d82c3ff" : "#71717a";
  };

  const navItems = [
    {
      icon: <IconGrid strokeColor={getStrokeColor("/")} />,
      title: "All",
      link: "/",
    },
    {
      icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
      title: "Completed",
      link: "/completed",
    },
    {
      icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
      title: "Pending",
      link: "/pending",
    },
    {
      icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
      title: "Overdue",
      link: "/overdue",
    },
  ];
  return (
    <div className="basis-[5rem] flex flex-col bg-white z-10">
      <div className="flex items-center justify-center h-[5rem]">
        <img src="/logo.png" width={40} height={40} alt="logo" />
      </div>

      <div className="mt-8 flex-1 flex flex-col items-center justify-between">
        <ul className="flex flex-col gap-10">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group flex flex-col items-center"
            >
              <Link href={item.link} className="relative flex items-center">
                {pathname === item.link && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#5c6ac4] rounded-full"></span>
                )}
                {item.icon}
              </Link>

              <span className="absolute left-10 top-1/2 -translate-y-1/2 text-s whitespace-nowrap text-white bg-[#5c6ac4] px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        {/* Delete All Button */}
        <div className="mb-6">
          <button className="w-12 h-12 flex justify-center items-center border border-gray-300 rounded-full hover:border-[#EB4E31] hover:bg-[#EB4E31]/10 transition-colors">
            <IconDeleteAll strokeColor="#EB4E31" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiniSidebar;
