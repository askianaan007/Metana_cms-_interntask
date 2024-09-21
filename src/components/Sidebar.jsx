import React, { useState } from "react";
import { Segmented } from "antd";
import NavigationPlace from "./sideBar/NavigationPlace";
import FieldSelection from "./sideBar/FieldSelection";
import WelcomeBar from "./sideBar/WelcomeBar";

const Sidebar = ({
  component,
  setComponent,
  onDataChange,
  field,
  setField,
  title, description, buttonText,
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
          <FieldSelection component={component} setField={setField} />
        </>
      ) : (
        <WelcomeBar
      title={title}
      description={description}
      buttonText={buttonText}
          onDataChange={onDataChange}
          setField={setField}
          field={field}
        />
      )}
    </div>
  );
};

export default Sidebar;
