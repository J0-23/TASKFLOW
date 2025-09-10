import React from "react";
import Profile from "../Profile/Profile";
import RadialChart from "../RadialChart/RadialChart";
import { useUserContext } from "@/context/userContext";

function Sidebar() {
  const { logoutUser } = useUserContext();
  return (
    <div className="w-[20rem] mt-[5rem] h-[calc(100%-5rem)] fixed right-0 top-0 bg-white flex flex-col">
      <Profile />

      <div className="mt-6 mx-6">
        <RadialChart />
      </div>

      <button
        className="mt-auto mb-6 mx-6 py-3 px-6 bg-[#EB4E31] text-white font-semibold rounded-lg 
               hover:bg-[#c53b28] transition-colors duration-200 ease-in-out"
        onClick={logoutUser}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Sidebar;
