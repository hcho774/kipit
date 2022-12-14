import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import BusinessIcon from "@mui/icons-material/Business";

function Widget({ type, products, offices }) {
  let data;
  let totalPrice = 0;
  let userArray = products?.map((element) => {
    totalPrice += element.price;
    return element.user;
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
        amount: `$ ${totalPrice}`,
        // diff: products.length,
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
        amount: `${userArray.length} users`,
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
        title: "AVG. SPENDINGS",
        isMoney: true,
        link: "View net spendings",
        amount: averageSpending,
        // diff: ,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "office":
      data = {
        title: "OFFICES",
        isMoney: false,
        link: "See details",
        amount: `${offices.length} offices`,

        icon: (
          <BusinessIcon
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
          {data.isMoney && "$"} {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon />
          {diff} % */}
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
