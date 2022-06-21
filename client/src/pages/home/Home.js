import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <NavBar />
        home containber
      </div>
    </div>
  );
}

export default Home;
