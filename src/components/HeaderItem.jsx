import React from "react";

export default function HeaderItem({ name, Icon }) {
  console.log(name);
  return (
    <div className="">
        {/* {"hello"} */}
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}
