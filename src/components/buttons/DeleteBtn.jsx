import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const DeleteBtn = () => {
  return (
    <>
      <button className="flex items-center justify-center w-full p-2 text-xs font-medium rounded-lg hover:bg-rose-100 text-rose-500">
        <RiDeleteBinLine className="mr-2" />
        Delete
      </button>
    </>
  );
};

export default DeleteBtn;
