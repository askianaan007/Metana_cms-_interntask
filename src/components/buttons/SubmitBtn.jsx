import React from "react";
import { FaCloud } from "react-icons/fa";

const SubmitBtn = () => {
  return (
    <>
      <button className="  bg-black hover:bg-zinc-700 transition duration-150 rounded-lg py-2.5 px-2 w-full text-white text-xs font-medium flex items-center justify-center h-9">
        <FaCloud className="mr-2" />
        Save & Publish
      </button>
    </>
  );
};

export default SubmitBtn;
