import React from "react";
import Sidebar from "../../components/Sidebar";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">Container</div>
    </div>
  );
}

export default Home;
