import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Widget from "../../components/Widget";
import "./home.scss";
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
      </div>
    </div>
  );
}

export default Home;
