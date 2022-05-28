import TextArea from "@/components/Input/TextArea";
import SelectInput from "@/components/Input/SelectInput";
import React from "react";
import Input from "../index";

const InputGroup = (props) => {
  let input = null;

  switch (props.type) {
    case "select":
      input = <SelectInput {...props} />;
      break;
    case "textarea":
      input = <TextArea {...props} />;
      break;
    default:
      input = <Input {...props} />;
      break;
  }

  return (
    <div
      className={`flex flex-col justify-between items-start my-2 mx-0 md:mx-4 ${props.size}`}
    >
      <label className="mb-2">{props.label}: </label>
      {input}
    </div>
  );
};

export default InputGroup;
