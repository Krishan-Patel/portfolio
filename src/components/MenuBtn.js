import React from "react";
import "../styles/MenuBtn.css";
import { Link } from "react-router-dom";

export default function MenuBtn(props) {
  let text = props.text;
  let ToggleFunc = props.Toggle;

  // props.mobile ? MobileMenuIcons : MenuIcon
  return (
    <Link
      to={props.path}
      className={props.styles}
      onClick={() => {
        if (ToggleFunc) {
          ToggleFunc();
        }
      }}
    >
      <p>{text}</p>
    </Link>
  );
}
