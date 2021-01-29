import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch } from "react-redux";
import { changeMenuState } from "../features/productSlice";
export default function Header() {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header_left">
        <IconButton onClick={() => dispatch(changeMenuState())}>
          <MenuIcon />
        </IconButton>
        <h3>Just Buy It!</h3>
      </div>
      <div className="header_middle">
        <input className="searchbar" placeholder="Search…" type="text" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      <div className="header_right">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        <h5>Name</h5>
        <IconButton size="small">
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}
