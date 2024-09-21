import React, { useRef, useState } from "react";
import { MdUpload } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const WelcomeBar = ({
  item,
  id,
  title,
  description,
  buttonText,
  onDataChange,
  setField,
  field,
}) => {
  const fileInputRef = useRef(null);

  const handleTitleChange = (e) => {
    onDataChange((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, title: e.target.value } : item
      )
    );
  };

  const handleDescriptionChange = (e) => {
    onDataChange((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, description: e.target.value } : item
      )
    );
  };

  const handleButtonTextChange = (e) => {
    onDataChange((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, buttonText: e.target.value } : item
      )
    );
  };

  const handleFileChange = (event) => {
    console.log("hhhhhhh");
    const selectedFile = event?.target?.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);

      onDataChange((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, image: imageUrl } : item
        )
      );
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input
  };

  return (
    <div>
      <div class="flex items-center justify-between mb-6">
        <div class="flex flex-col ">
          <div class="flex items-center gap-2 ">
            <IoIosSettings className="text-lg" />
            <h4 class="text-sm font-semibold">Settings</h4>
          </div>
          <p class="text-xs font-medium text-gray-400 text-start"> </p>
        </div>
        <button
          onClick={() => {
            setField("main");
          }}
          class="p-1 transition-all duration-200 ease-in-out bg-white border border-gray-300 rounded-lg ring-black border-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 animate-scale-up-sm"
        >
          <IoIosClose className="text-xl" />
        </button>
      </div>
      <div className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="title-input"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {item.type == "email" ? "Email" : "Title"}
          </label>
          <input
            id="title-input"
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="description-input"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <input
            id="description-input"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        {item.type == "email" ? null : (
          <div>
            <label
              htmlFor="button-input"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Button Text
            </label>
            <input
              id="button-input"
              type="text"
              value={buttonText}
              onChange={handleButtonTextChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        )}
      </div>
      {item.type == "email" ? null : (
        <>
          <button
            type="button"
            className="mt-5 flex items-center text-sm font-normal gap-2 p-1 font-medium border border-gray-300 rounded-md focus:border-black focus:outline-none hover:border-black"
            onClick={handleButtonClick}
          >
            <MdUpload className="ml-0.5" />
            Upload
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }} // This hides the file input
          />
        </>
      )}

      <button className="mt-5 w-full bg-black text-white py-2 rounded-md text-sm">
        Save & Publish
      </button>
    </div>
  );
};

export default WelcomeBar;
