import React, { useState } from "react";
import "../styles/Navbar.css";
import MenuBtn from "./MenuBtn";

export default function Navbar() {
  let intial = window.innerWidth > 1100 ? "DesktopMenu" : "Mobile";
  let [MenuType, setMenuType] = useState(intial);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1100 && MenuType !== "Mobile") {
      setMenuType("Mobile");
    } else if (window.innerWidth > 1100 && MenuType !== "DesktopMenu") {
      setMenuType("DesktopMenu");
    }
  });

  function ToggleActive() {
    if (MenuType === "Mobile") {
      setMenuType("MobileActive");
    } else {
      setMenuType("Mobile");
    }
  }
  let Mobile = (
    <div className="Navbar2">
      <svg
        viewBox="0 0 100 80"
        width="40"
        height="40"
        onClick={ToggleActive}
        fill="white"
      >
        <rect width="100" height="10"></rect>
        <rect y="30" width="100" height="10"></rect>
        <rect y="60" width="100" height="10"></rect>
      </svg>
      {/* <img src={menu_btn} alt='' onClick={ToggleActive}></img> */}
    </div>
  );
  let DesktopMenu = (
    <div className="Navbar">
      <div className="Btn_Container">
        <MenuBtn text="Home" styles="Desktop" path="/" />
        <MenuBtn text="GameCenter" styles="Desktop" path="/New-Tab" />
        <MenuBtn text="StockNow " styles="Desktop" path="/StockNow" />
        <MenuBtn text="Task Manager" styles="Desktop" path="/Todo-list" />
      </div>
    </div>
  );

  let MobileActive = (
    <div className="NavbarMobile">
      {Mobile}
      <div className="Btn_ContainerMobile">
        <MenuBtn text="Home" styles="Mobile" path="/" Toggle={ToggleActive} />
        <MenuBtn
          text="GameCenter"
          styles="Mobile"
          path="/New-Tab"
          Toggle={ToggleActive}
        />
         <MenuBtn
          text="StockNow"
          styles="Mobile"
          path="/StockNow"
          Toggle={ToggleActive}
        /> 
        <MenuBtn
          text="Task Manager"
          styles="Mobile"
          path="/Todo-list"
          Toggle={ToggleActive}
        />
      </div>
    </div>
  );

  if (MenuType === "DesktopMenu") {
    return DesktopMenu;
  } else if (MenuType === "Mobile") {
    return Mobile;
  } else {
    return MobileActive;
  }
}
