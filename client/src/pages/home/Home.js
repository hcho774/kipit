import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Widget from "../../components/Widget";
import "./home.scss";
import Chart from "../../components/Chart";
import Featured from "../../components/Featured";
import List from "../../components/List";

function Home({ products, offices, navigate, setUser, user }) {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <NavBar navigate={navigate} setUser={setUser} user={user} />
        <div className="widgets">
          <Widget type="purchase" products={products} offices={offices} />
          <Widget type="user" products={products} offices={offices} />
          <Widget type="spending" products={products} />
          <Widget type="office" products={products} offices={offices} />
        </div>
        <div className="charts">
          <Featured products={products} />
          <Chart aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Lastest Purchase</div>
          <List products={products} />
        </div>
      </div>
    </div>
  );
}

export default Home;
