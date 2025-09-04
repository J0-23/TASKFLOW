"use client";

import { useUserContext } from "@/context/userContext";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";

export default function Page() {
  const { resetPassword } = useUserContext();
  const pathname = usePathname();
  const resetToken = pathname.split("/").pop() || "";

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    resetPassword(resetToken, password);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white/80 p-10 shadow-xl backdrop-blur-sm transition-transform hover:scale-[1.01]"
      >
        <h1 className="mb-4 text-center text-[2.4rem] font-semibold text-gray-900">
          Reset Your Password
        </h1>

        <div className="mb-5 relative flex flex-col">
          <label
            htmlFor="password"
            className="mb-1 text-[1.2rem] text-gray-500"
          >
            New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="*********"
            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-4 top-15 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        </div>

        <div className="mb-5 relative flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="mb-1 text-[1.2rem] text-gray-500"
          >
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="*********"
            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-4 top-15 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-4 text-[1.2rem] font-semibold rounded-xl bg-emerald-500 text-white shadow-md hover:bg-emerald-600 transition-colors"
        >
          Reset Password
        </button>
      </form>
    </main>
  );
}
