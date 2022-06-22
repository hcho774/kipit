import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import InventoryIcon from "@mui/icons-material/Inventory";

function Widget({ type, products }) {
  let data;

  let totalPrice = 0;
  products.map((element) => {
    totalPrice += element.price;
  });

  const averageSpending = Math.floor(totalPrice / products.length);

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "purchase":
      data = {
        title: "PURCHASES",
        isMoney: false,
        link: "See all orders",
        amount: products.length,
        diff: products.length,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "View all users",
        // amount: ,
        // diff: ,
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "spending":
      data = {
        title: "SPENDINGS",
        isMoney: true,
        link: "View net spendings",
        // amount: ,
        // diff: ,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "inventory":
      data = {
        title: "INVENTORY",
        isMoney: true,
        link: "See details",
        // amount: ,
        // diff: ,
        icon: (
          <InventoryIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
