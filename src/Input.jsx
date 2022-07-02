import React from "react";
function Input(props) {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type="text"
      className=" w-full border-gray-300  shadow-sm  p-2 sm:text-sm"
    />
  );
}
export default Input;
