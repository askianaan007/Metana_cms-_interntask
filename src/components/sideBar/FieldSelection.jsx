import React, { useEffect, useState } from "react";
import { icons } from "../../assets/assets";
import { Divider } from "antd";
import SubmitBtn from "../buttons/SubmitBtn";
import DeleteBtn from "../buttons/DeleteBtn";
import FieldButtons from "../buttons/FieldButtons";
import AddField from "../modals/AddField";


const FieldSelection = ({ formdata,component, setField ,onDataChange,setCurrent}) => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    setFields([
      {
        name: "Welcome screen",
      },
    ]);
  }, []);
  return (
    <>
      {component === "Content" ? (
        <div className="flex flex-col h-full pb-4  pt-5 overflow-y-auto">
          <div className="flex flex-col items-start gap-1 mb-1 text-start mt-4">
            <div className="flex mb-1 items-center gap-1">
              <icons.barIcon />
              <h4 className="text-sm font-semibold">Steps</h4>
            </div>
            <p className="text-xs text-gray-200 mb-4">
              The steps users will take to complete the form
            </p>
            <div className="flex flex-col w-full gap-2 overflow-y-auto">
              {formdata.map((item, index) => {
                return <FieldButtons  setField={setField} text={item.type} item={item} setCurrent={setCurrent} />;
              })}

              <AddField
              onDataChange={onDataChange}
                setField={setField}
                fields={fields}
                setFields={setFields}
                setCurrent={setCurrent}
              />
              <Divider />
              <FieldButtons text={"End screen"} setField={setField} />
            </div>
          </div>
          <div className="flex gap-2 mt-auto justify-end">
            <SubmitBtn />
            <DeleteBtn />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FieldSelection;
