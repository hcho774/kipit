import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import "./list.scss";

function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <NavBar />
        <DataTable products={products} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default List;
