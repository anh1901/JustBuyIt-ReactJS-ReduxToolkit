import React from "react";
import "./SideBarOption.css";
import { useHistory } from "react-router-dom";
import { selectMenu } from "../features/productSlice";
import { useSelector } from "react-redux";

export default function SideBarOption({ Icon, title, selected, path }) {
  const history = useHistory();
  const selectMenuIsOpen = useSelector(selectMenu);
  const onClick = () => {
    history.push(path);
  };
  return (
    <div
      className={`sidebar_option ${selected && "sidebar_option--active"} ${
        !selectMenuIsOpen && "sidebar_option--close"
      }`}
      onClick={onClick}
    >
      <Icon />
      <h3>{title}</h3>
    </div>
  );
}
