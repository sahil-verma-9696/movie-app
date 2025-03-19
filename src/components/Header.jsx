import React from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiPlus,
  HiTv,
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center gap-8 justify-between p-5">
      <div className="flex items-center gap-8 items-center" >
        <img
          src=" https://logowik.com/content/uploads/images/disney-hotstar3268.jpg"
          alt=""
          className="w-[80px] md:width[115px] object-cover"
          srcSet=""
        />
        .
        {menu.map((item) => (
          <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
        ))}
      </div>
      <img src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid" className="w-[40px] rounded-full" alt="" />
    </div>
  );
}

export default Header;
