import React from "react";
import { IoCube } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

const NavigationPlace = () => {
  return (
    <div className="flex items-center mb-3 justify-between ">
      <div className="flex items-center gap-2">
        <button className="flex items-center text-xs font-medium  hover:text-blue-600 transition duration-200 text-zinc-500">
          <IoCube className="mr-1 text-sm" />
          Dashboard
        </button>
        <IoIosArrowForward className=" text-xs" />
        <p className="text-xs font-medium">Demo</p>
      </div>
      <button className="inline-flex items-center justify-center rounded-lg transition hover:bg-gray-100 h-7 w-7">
        <IoMdSettings className="text-lg" />
      </button>
    </div>
  );
};

export default NavigationPlace;
