import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className=" px-5 hover:shadow-green-400 py-2 mr-2 rounded-md shadow-md shadow-pink-400 text-white"
    >
      {props.children}{" "}
    </button>
  );
}
export default Button;
