import { BsBookmark, BsPerson } from "react-icons/bs";

import { AiOutlineHeart } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import { FaHouseUser } from "react-icons/fa";
import InstaLogo from '../../assets/Instagram-title.png'
import { MdExplore } from "react-icons/md";
import React from "react";
import { RiMessengerLine } from "react-icons/ri";
import { TbFileText } from "react-icons/tb";
import style from './LeftSection.module.css'
import { useNavigate } from "react-router-dom";

function LeftSection() {
  const nevigate = useNavigate();


  const menu = [
    { id: 1, icon: <FaHouseUser />, Name: "Home", },
    { id: 2, icon: <MdExplore />, Name: "Explore" },
    { id: 3, icon: <AiOutlineHeart />, Name: "Notifications" },
    { id: 4, icon: <RiMessengerLine />, Name: "Message" },
    { id: 5, icon: <BsBookmark />, Name: "Bookmarks" },
    { id: 6, icon: <TbFileText />, Name: "Lists" },
    { id: 7, icon: <BsPerson />, Name: <p onClick={() => nevigate("/Profile")}>Profile</p> },
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
