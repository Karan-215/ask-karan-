import React from "react";
function Card(props) {
  return (
    <div className="bg-gray-700 rounded-md px-4 py-2 shadow-lg shadow-red-700 w-[40vw] flex flex-col items-start">
      <h1 className="text-2xl font-bold  p-2 text-white">{props.title}</h1>
      <h1 className="text-2xl text-white">{props.subtitle}</h1>
      <p className="text-xl pt-4 text-white">{props.children}</p>
      <img className="pt-4" src={props.imglink} />
    </div>
  );
}
export default Card;
