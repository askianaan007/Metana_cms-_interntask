import React, { useEffect, useState } from "react";
import { FaStopCircle } from "react-icons/fa";

const FieldButtons = ({ text, setField }) => {
  return (
    <button
      onClick={() => setField(text)}
      className="relative flex items-center w-full pl-1 transition duration-150  rounded-lg cursor-pointer hover:bg-zinc-100 bg-zinc-50"
    >
      <div className="absolute w-2 h-8 transform -translate-y-1/2 bg-black rounded-r-full -left-6 top-1/2"></div>
      <FaStopCircle className="pl-1 pr-1.5 h-8 text-lg text-gray-150" />
      <p className="text-xs px-1.5  w-full focus:outline-none py-3">{text}</p>
    </button>
  );
};

export default FieldButtons;
