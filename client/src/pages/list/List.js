import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import "./list.scss";
function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <NavBar />
        <DataTable />
      </div>
    </div>
  );
}

export default List;
