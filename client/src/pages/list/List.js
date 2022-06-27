import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import "./list.scss";
import DataTableOffices from "../../components/DataTableOffices";
function List({
  title,
  products,
  setProducts,
  navigate,
  setUser,
  user,
  handleEdit,
  offices,
  setOffices,
}) {
  console.log(title);
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <NavBar navigate={navigate} setUser={setUser} user={user} />
        {title == "products" ? (
          <DataTable
            title={title}
            products={products}
            setProducts={setProducts}
            navigate={navigate}
            handleEdit={handleEdit}
          />
        ) : (
          <DataTableOffices offices={offices} setOffices={setOffices} />
        )}
      </div>
    </div>
  );
}

export default List;
