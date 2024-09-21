import React, { useState } from "react";
import { Modal } from "antd";
import { FaPlus } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
import { TiFolderOpen } from "react-icons/ti";
import { MdOutlineContactPage } from "react-icons/md";
import { IoMdPaper } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

interface AppProps {
  setFields: (field: any) => void; 
  fields: any; 
  setField: (field: any) => void; 

}

const App: React.FC<AppProps> = ({ setFields,setField, fields }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  function addNewEmailField(){
    setField("email")
    // setFields([...fields, { name: "Email" }]);

    
  }

  return (
    <>
      <button
        onClick={showModal}
        className="inline-flex items-center justify-center  font-medium border border-zinc-200  hover:bg-zinc-100 w-[90px]  rounded-lg text-xs h-7 px-2.5 gap-0.5 mt-2"
      >
        <FaPlus className="ml-0.5" />
        Add field
      </button>

      <Modal
        open={open}
        title="Add field"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
        <div className="grid grid-cols-4 ">
          <button className="flex items-center gap-3 p-2 my-1 text-[12px] hover:font-bold font-semibold text-start">
            <div className="hover:font-bold text-[14px] ">
              <span>
                <IoCheckmarkOutline />
              </span>
            </div>
            <span>Multiple Choice</span>
          </button>

          <button className="flex items-center gap-3 p-2 my-1 text-[12px] hover:font-bold font-semibold text-start">
            <div className="hover:font-bold text-[14px] ">
              <span>
                <FaRegPenToSquare />
              </span>
            </div>
            <span>Short Text</span>
          </button>
          <button onClick={()=>{addNewEmailField()}}  className="flex items-center gap-3 p-2 my-1 text-[12px] hover:font-bold font-semibold text-start">
            <div className="hover:font-bold text-[14px] ">
              <span>
                <FaRegEnvelopeOpen />
              </span>
            </div>
            <span>Email</span>
          </button>
          <button className="flex items-center gap-3 p-2 my-1 text-[12px] hover:font-bold font-semibold text-start">
            <div className="hover:font-bold text-[14px] ">
              <span>
                <RiArrowDropDownLine />
              </span>
            </div>
            <span>Dropdown</span>
          </button>
          <button className="flex items-center gap-3 p-2 my-1 text-[12px] hover:font-bold font-semibold text-start">
            <div className="hover:font-bold text-[14px] ">
              <span>
                <FaPhone />
              </span>
            </div>
            <span>Phone Number</span>
          </button>
          <button className="flex items-center gap-3 p-2 my-1 text-[12px] hover:font-bold font-semibold text-start">
            <div className="hover:font-bold text-[14px] ">
              <span>
                <TiFolderOpen />
              </span>
            </div>
            <span>Section</span>
          </button>
          <button className="flex items-center gap-3 p-2 my-1 text-[12px] hover:font-bold font-semibold text-start">
            <div className="hover:font-bold text-[14px] ">
              <span>
                <MdOutlineContactPage />
              </span>
            </div>
            <span>Contact Information</span>
          </button>
          <button className="flex items-center gap-3 p-2 my-1 text-[12px] hover:font-bold font-semibold text-start">
            <div className="hover:font-bold text-[14px] ">
              <span>
                <IoMdPaper />
              </span>
            </div>
            <span>legal</span>
          </button>
          <button className="flex items-center gap-3 p-2 my-1 text-[12px] hover:font-bold font-semibold text-start">
            <div className="hover:font-bold text-[14px] ">
              <span>
                <TbWorld />
              </span>
            </div>
            <span>country</span>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default App;
