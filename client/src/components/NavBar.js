import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

function NavBar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <img
              src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x"
              alt=""
              className="avatar"
            />
          </div>
          <div className="item">
            <LoginIcon className="icon" />
            Login
          </div>
          <div className="item">
            <LogoutIcon className="icon" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
