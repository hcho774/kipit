import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import "./list.scss";

function List({ products, setProducts }) {
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
