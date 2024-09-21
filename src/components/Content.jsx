import React from "react";
import { asserts } from "../assets/assets";

const Content = ({ formdata, field, image, onDataChange }) => {
  const handleTitleChange = (e) => {
    onDataChange((prevData) =>
      prevData.map((item) =>
        item.id === formdata.id ? { ...item, title: e.target.value } : item
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

  return (
    <div className="w-full py-2 pr-2">
      <div className="relative flex flex-col justify-start h-full overflow-x-hidden pt-10 transition-all duration-300 border shadow-xl rounded-2xl border-zinc-200 overflow-y-hidden bg-black ps-[120px]">
        <div className="flex flex-col h-full w-full max-w-[90%] md:flex-row gap-10">
          <div className="flex flex-col w-full justify-center p-4">
            <input
              onChange={handleTitleChange}
              type="text"
              className={`${
                field == "email" ? "text-3xl" : "text-4xl font-semibold"
              } text-white bg-black leading-tight`}
              value={formdata.title}
            />

            <input
              onChange={handleDescriptionChange}
              type="text"
              className="mt-6 text-2xl text-white font-light bg-black"
              value={formdata.description}
            />
            {formdata.type !== "email" ? (
              <div className="flex justify-start mt-6">
                <button className="bg-white text-black rounded-2xl px-2 py-2 transition-all duration-300 ease-in-out hover:border hover:border-[#4096ff]">
                  <input
                    onChange={handleButtonTextChange}
                    type="text"
                    value={formdata.buttonText}
                    className="px-2 py-1 rounded-md"
                    style={{ width: `${formdata.buttonText.length + 1}ch` }}
                  />
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          {formdata.type  !== "email" ? (
            <div className="flex flex-col w-full justify-center p-4">
              <img
                src={image ? image : asserts.image}
                alt="Firefly under the apple tree"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
