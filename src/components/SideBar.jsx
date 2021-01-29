import React from "react";
import "./SideBar.css";
import HomeIcon from "@material-ui/icons/Home";
import SideBarOption from "./SideBarOption";
import ListIcon from "@material-ui/icons/List";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

export default function SideBar() {
  return (
    <div className="sidebar">
      <SideBarOption Icon={HomeIcon} title="Dashboard" path="/" selected />

      <SideBarOption
        Icon={ListIcon}
        title="Products List"
        path="/productslist"
      />

      <SideBarOption
        Icon={ShoppingBasketIcon}
        title="Orders List"
        path="/orderslist"
      />
    </div>
  );
}
