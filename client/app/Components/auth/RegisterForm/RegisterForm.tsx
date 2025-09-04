"use client";

import { useUserContext } from "@/context/userContext";
import React from "react";

const RegisterForm = () => {
  const { registerUser, userState, handleUserInput } = useUserContext();
  const { name, email, password } = userState;
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        registerUser();
      }}
      className="mx-auto mt-20 w-full max-w-md rounded-2xl bg-white/80 p-10 shadow-xl backdrop-blur-sm transition-transform hover:scale-[1.01]"
    >
      <h1 className="mb-2 text-center text-[2.4rem] font-semibold text-gray-900">
        Register for an Account
      </h1>
      <p className="mb-7 text-center text-[1.2rem] text-gray-500">
        Create an account. Already have an account?{" "}
        <a
          href="/login"
          className="font-medium text-emerald-500 hover:text-indigo-500 transition-colors"
        >
          Login Here
        </a>
      </p>

      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-1 block text-[1.2rem] text-gray-500"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => handleUserInput("name")(e)}
          name="name"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          placeholder="Sentri Auth"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-1 block text-[1.2rem] text-gray-500"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => handleUserInput("email")(e)}
          name="email"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          placeholder="youremail@example.com"
        />
      </div>

      <div className="mb-5 relative">
        <label
          htmlFor="password"
          className="mb-1 block text-[1.2rem] text-gray-500"
        >
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => handleUserInput("password")(e)}
          name="password"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          placeholder="****************"
        />
        <button
          type="button"
          className="absolute right-4 top-12 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={togglePassword}
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
        disabled={!name || !email || !password}
        onClick={registerUser}
        className="w-full rounded-xl bg-emerald-500 py-4 text-[1.2rem] font-semibold text-white shadow-md hover:bg-emerald-600 disabled:opacity-50 transition-colors"
      >
        Register Now
      </button>
    </form>
  );
};

export default RegisterForm;
