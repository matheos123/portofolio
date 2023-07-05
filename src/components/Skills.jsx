import React from "react";

const Skills = ({ width = "w-full", title, percent }) => {
  return (
    <div
      className={`grid col-span-3 shadow-xl
       shadow-slate-200 mt-2 p-2
       `}
    >
      <p className={`text-[18px] font-playfair`}>{title} </p>
      <div className={` w-full bg-white h-3`}>
        <div className={`h-full ${width}  bg-red`}></div>
      </div>
      <span className={"text-red text-end text-xl mr-1 "}>{percent}</span>
    </div>
  );
};

export default Skills;
