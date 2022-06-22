import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Widget from "../../components/Widget";
import "./home.scss";
import Chart from "../../components/Chart";
import Featured from "../../components/Featured";
import List from "../../components/List";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <NavBar />
        <div className="widgets">
          <Widget type="order" />
          <Widget type="user" />
          <Widget type="spending" />
          <Widget type="inventory" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Lastest Purchase</div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Home;
