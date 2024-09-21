import React, { useState } from "react";
import { Segmented } from "antd";
import NavigationPlace from "./sideBar/NavigationPlace";
import FieldSelection from "./sideBar/FieldSelection";
import WelcomeBar from "./sideBar/WelcomeBar";

const Sidebar = ({
  current,
  component,
  setCurrent,
  setComponent,
  onDataChange,
  field,
  setField,
  formdata,
}) => {
  return (
    <div className="h-screen w-[20rem] relative pt-4 px-5 flex flex-col">
      {field === "main" ? (
        <>
          <NavigationPlace />
          <Segmented
            options={["Content", "Design", "Share", "Replies"]}
            onChange={(value) => setComponent(value)}
          />
          <FieldSelection formdata={formdata} setCurrent={setCurrent}  onDataChange={onDataChange} component={component} setField={setField} />
        </>
      ) : (
        formdata.map((item, index) => {
          // Use parentheses to wrap the entire return value of the map function
          return item.id === current.id ? (
            <WelcomeBar
            item={item}
              key={item.id}  // Don't forget to add a unique key for each item in a list
              id={item.id}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              onDataChange={onDataChange}
              setField={setField}
              field={field}
            />
          ) : null;  // Return null if the condition is not met
        })
        )
      }
    </div>
  );
};

export default Sidebar;
