import { BsBookmark, BsPerson } from "react-icons/bs";
import { FaHashtag, FaHouseUser } from "react-icons/fa";

import { CgMoreO } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import InstaLogo from '../../assets/Instagram-title.png'
import React from "react";
import { TbFileText } from "react-icons/tb";
import { VscBellDot } from "react-icons/vsc";
import style from './LeftSection.module.css'

function LeftSection() {


  const menu = [
    {
      id: 1,
      icon: <FaHouseUser />,
      Name: <p>Home</p>,
    },
    { id: 2, icon: <FaHashtag />, Name: "Explore" },
    { id: 3, icon: <VscBellDot />, Name: "Notifications" },
    { id: 4, icon: <HiOutlineMail />, Name: "Message" },
    { id: 5, icon: <BsBookmark />, Name: "Bookmarks" },
    { id: 6, icon: <TbFileText />, Name: "Lists" },
    {
      id: 7,
      icon: <BsPerson />,
      Name: <p>Profile</p>,
    },
    { id: 8, icon: <CgMoreO />, Name: "More" },
  ];

  return (
    <>
      <div className={style.container}>
        <div className={style.innerContainer}>
          <div className={style.innerContainer2}>
            <div className={style.logo}>
            <img src={InstaLogo} alt="Instagram" />
            </div>

            {menu.map((menu, index) => {
              return (
                <div className={style.sidebar} key={index}>
                  <div className={style.sidebarOption}>
                    <h2>{menu.icon}</h2>
                    <span>{menu.Name}</span>
                  </div>
                </div>
              );
            })}
           
           
          </div>
         
        </div>
      </div>
    </>
  );
}
export default LeftSection;
