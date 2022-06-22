import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Widget from "../../components/Widget";
import "./home.scss";
import Chart from "../../components/Chart";
import Featured from "../../components/Featured";
import List from "../../components/List";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then((products) => setProducts(products));
  }, []);

  console.log(products);

  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <NavBar />
        <div className="widgets">
          <Widget type="purchase" products={products} />
          <Widget type="user" products={products} />
          <Widget type="spending" products={products} />
          <Widget type="inventory" products={products} />
        </div>
        <div className="charts">
          <Featured />
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
