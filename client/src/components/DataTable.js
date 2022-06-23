import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { productColumns, userRows } from "./datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./datatable.scss";

function DataTable({ products, setProducts, navigate }) {
  const [productId, setProductId] = useState();

  function handleDelete(id) {
    setProducts(products.filter((item) => item.id !== id));
  }

  function handleView(id) {
    console.log(id);

    navigate(`products/${productId}`);
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction" onClick={() => handleView(params.row.id)}>
            <div className="viewButton">View</div>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Products
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={products}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;
