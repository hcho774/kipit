import React from "react";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

function Featured({ products }) {
  let totalPrice = 0;
  let userArray = [];
  products.map((element) => {
    totalPrice += element.price;
    userArray.push(element.user);
  });

  const limit = 10000;

  let progressBar = totalPrice / limit;

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Spending</h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={(progressBar * 100).toFixed(2)}
            text={`${(progressBar * 100).toFixed(2)}%`}
            strokeWidth={5}
          />
        </div>
        <p className="title">Total purchase made</p>
        <p className="amount">$ {totalPrice} </p>
        <p className="desc">previous transaction processing included</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">Demo $12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">Demo $12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
