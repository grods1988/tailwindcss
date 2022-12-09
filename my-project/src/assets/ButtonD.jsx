import React from "react";

function ButtonD(props) {
  return (
    <button className="bg-gray-900 text-white font-semibold text-base py-2 px-8 rounded md:ml-8 hover:bg-gray-700 duration-500 capitalize">
      {props.children}
    </button>
  );
}

export default ButtonD;
