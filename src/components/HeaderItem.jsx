import React from "react";

export default function HeaderItem({ name, Icon }) {
  console.log(name);
  return (
    <div className=" flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-8">
        {/* {"hello"} */}
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}
