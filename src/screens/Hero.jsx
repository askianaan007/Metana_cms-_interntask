import React, { useState } from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Hero = () => {
  const [field, setField] = useState("main");
  const [component, setComponent] = useState("Content");
  const [formData, setFormData] = useState({
    title: "Welcome to our form",
    description: "This is a description of the form",
    buttonText: "Start",
    image:null,
  });

  return (
    <div className="flex h-full">
      <Sidebar
        field={field}
        setField={setField}
        component={component}
        setComponent={setComponent}
        onDataChange={setFormData}
        {...formData} 
      />

      <Content  onDataChange={setFormData} {...formData} 
      field={field}/>
    </div>
  );
};

export default Hero;
