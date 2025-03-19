import React from "react";
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiPlus, HiTv } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
function Header() {
  const menu = [
    {
      name: "HOME",
      icon:HiHome
    },
    {
      name:"SEARCH",
      icon:HiMagnifyingGlass
    },
    {
      name:"WATCH LIST",
      icon:HiPlus
    },
    {
      name:"MOVIES",
      icon:HiPlayCircle

    },
    {
      name:"SERIES",
      icon:HiTv
    }
  ]
  return (
    <div>
      <img
        src=" https://logowik.com/content/uploads/images/disney-hotstar3268.jpg"
        alt=""
        className="w-[80px] md:width[115px] object-cover"
        srcSet=""
      />.
      {menu.map((item)=>(
        <HeaderItem key={item.name} name={item.name} Icon={item.icon}/>
      ))}
    </div>
  );
}

export default Header;

