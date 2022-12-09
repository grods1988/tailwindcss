import React from "react";

function ButtonR(props) {
  return (
    <button className="bg-[#E10600] text-[black] border border-[#e10600] font-semibold text-base py-2 px-8 rounded md:ml-8 hover:bg-white hover:text-[#E10600] duration-500 capitalize">
      {props.children}
    </button>
  );
}

export default ButtonR;
