import React from "react";
import { FaPlus } from "react-icons/fa6";

const AddFieldBtn = (showModal) => {
  return (
    <>
      <button onClick={showModal} className="inline-flex items-center justify-center  font-medium border border-zinc-200  hover:bg-zinc-100 w-[90px]  rounded-lg text-xs h-7 px-2.5 gap-0.5 mt-2">
        <FaPlus className="ml-0.5"/>
        Add field
      </button>
    </>
  );
};

export default AddFieldBtn;
