"use client";
import { useUserContext } from "@/context/userContext";
import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const { forgotPasswordEmail } = useUserContext();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    forgotPasswordEmail(email);
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-20 w-full max-w-md rounded-2xl bg-white/80 p-10 shadow-xl backdrop-blur-sm transition-transform hover:scale-[1.01]"
    >
      <h1 className="mb-2 text-center text-[1.7rem] font-semibold text-gray-900">
        Enter email to reset password
      </h1>

      <div className="mt-5 flex flex-col">
        <label htmlFor="email" className="mb-1 text-[1.2rem] text-gray-500">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          name="email"
          placeholder="email@gmail.com"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        />
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-xl bg-emerald-500 py-4 text-[1.2rem] font-semibold text-white shadow-md hover:bg-emerald-600 transition-colors"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
