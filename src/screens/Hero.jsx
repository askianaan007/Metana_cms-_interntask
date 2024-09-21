import React, { useState } from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Hero = () => {
  const [field, setField] = useState("main");
  const [component, setComponent] = useState("Content");
  const [current, setCurrent] = useState({
    id: 1,
    title: "Welcome to our form",
    description: "This is a description of the form",
    buttonText: "Start",
    image: null,
    type: "Welcome screen",
  });
  const [formData, setFormData] = useState([
    {
      id: 1,
      title: "Welcome to our form",
      description: "This is a description of the form",
      buttonText: "Start",
      image: null,
      type: "Welcome screen",
    },
  ]);

  return (
    <div className="flex h-full">
      <Sidebar
      current={current}
        setCurrent={setCurrent}
        field={field}
        setField={setField}
        component={component}
        setComponent={setComponent}
        onDataChange={setFormData}
        formdata={formData}
      />
      {formData.map((item, index) => {
        return item.id == current.id ? (
          <Content onDataChange={setFormData} formdata={item} field={field} />
        ) : null;
      })}
    </div>
  );
};

export default Hero;
