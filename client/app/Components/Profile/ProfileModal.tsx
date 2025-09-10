"use client";

import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import { badge, check, github, mail } from "@/utils/Icons";
import Image from "next/image";
import React from "react";

function ProfileModal() {
  const ref = React.useRef(null);

  const { closeModal } = useTasks();
  const { user, updateUser, handleUserInput, userState, changePassword } =
    useUserContext();

  useDetectOutside({
    ref,
    callback: () => closeModal(),
  });

  const { name, email, photo } = user;

  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const handlePassword = (type: string) => (e: any) => {
    if (type === "old") setOldPassword(e.target.value);
    else setNewPassword(e.target.value);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div
        ref={ref}
        className="relative w-full max-w-lg bg-white rounded-lg shadow-md p-6 flex flex-col gap-4"
      >
        {/* Profile Image & Badge */}
        <div className="flex justify-between items-center mb-4">
          <div className="relative">
            <Image
              src={photo}
              alt="profile"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="absolute bottom-0 right-0">
              <span className="text-lg text-blue-400">{badge}</span>
              <span className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white">
                {check}
              </span>
            </div>
          </div>
          <button className="border border-gray-300 px-3 py-1 rounded-md text-xs text-gray-700 flex items-center gap-1">
            {check} Verified
          </button>
        </div>

        {/* Name & Email */}
        <div>
          <h1 className="text-lg font-bold text-gray-800">{name}</h1>
          <p className="text-sm text-gray-500">{email}</p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateUser(e, {
              name: userState.name,
              email: userState.email,
            });
          }}
          className="flex flex-col gap-4 mt-4 border-t border-gray-200 pt-4"
        >
          {/* Name */}
          <div className="grid grid-cols-[150px_1fr] gap-2 items-center">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              onChange={(e) => handleUserInput("name")(e)}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-800 w-full"
            />
          </div>

          {/* Email */}
          <div className="grid grid-cols-[150px_1fr] gap-2 items-center">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => handleUserInput("email")(e)}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                {mail}
              </span>
            </div>
          </div>

          {/* Password */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="oldPassword"
                className="text-sm font-medium text-gray-700"
              >
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={handlePassword("old")}
                className="px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="newPassword"
                className="text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={handlePassword("new")}
                className="px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => changePassword(oldPassword, newPassword)}
              className="px-4 py-2 bg-[#355b88] text-white rounded-md text-sm font-medium hover:bg-[#2a4f7c] transition"
            >
              Change Password
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#355b88] text-white rounded-md text-sm font-medium hover:bg-[#2a4f7c] transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileModal;
