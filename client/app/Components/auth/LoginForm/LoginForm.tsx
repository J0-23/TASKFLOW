"use client";

import { useUserContext } from "@/context/userContext";
import React from "react";

const LoginForm = () => {
  const { loginUser, userState, handleUserInput } = useUserContext();
  const { email, password } = userState;
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 min-w-[432px]">
      {" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginUser();
        }}
        className="mx-auto mt-20 w-full max-w-md rounded-2xl bg-white/80 p-10 shadow-xl backdrop-blur-sm transition-transform hover:scale-[1.01]"
      >
        <h1 className="mb-2 text-center text-[2.4rem] font-semibold text-gray-900">
          Welcome to <br />
          <span className="font-bold text-emerald-500">Sentri-Auth</span>
        </h1>
        <p className="mb-7 text-center text-[1.2rem] text-gray-500">
          {" "}
          Login now. Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-emerald-500 hover:text-indigo-500 transition-colors"
          >
            Register Here
          </a>
        </p>

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
            placeholder="example@gmail.com"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
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
            placeholder="****************"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
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

        <div className="text-right mb-7">
          <a
            href="/forgot-password"
            className="text-[1.2rem] font-semibold text-emerald-500 hover:text-indigo-500 transition-colors"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={!email || !password}
          onClick={loginUser}
          className="w-full rounded-xl bg-emerald-500 py-4 text-[1.2rem] font-semibold text-white shadow-md hover:bg-emerald-600 disabled:opacity-50 transition-colors"
        >
          Login Now
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
