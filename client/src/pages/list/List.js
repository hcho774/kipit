import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import "./list.scss";

function List({ products, setProducts, navigate, setUser, user, handleEdit }) {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <NavBar navigate={navigate} setUser={setUser} user={user} />
        <DataTable
          products={products}
          setProducts={setProducts}
          navigate={navigate}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default List;
