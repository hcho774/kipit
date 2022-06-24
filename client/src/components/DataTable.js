import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { Link } from "react-router-dom";
import { useState } from "react";
import "./datatable.scss";

function DataTable({ products, setProducts, navigate, handleEdit }) {
  const [productId, setProductId] = useState();

  const [selectionModel, setSelectionModel] = useState([]);

  function handleDelete(id) {
    fetch(`/products/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setProducts(products.filter((item) => item.id !== id));
      }
    });
  }

  function handleView(id) {
    navigate(`products/${productId}`);
  }
  const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.product}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 230,
    },

    {
      field: "quantity",
      headerName: "Quantity",
      width: 100,
    },
    {
      field: "locations",
      headerName: "Locations",
      width: 160,
      renderCell: (params) => {
        return (
          <div
            className={`cellWithStatus ${params.row.offices.map(
              (office) => `${office.id}, `
            )}`}
          >
            {params.row.offices.map((office) => `${office.id}, `)}
          </div>
        );
      },
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleView(params.row.id)}
            >
              View
            </div>
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
        Add & Eidt Products
        <div>
          <Link to="/products/new" className="link">
            Add New
          </Link>
          <Link
            to="/products/edit"
            className="link"
            onClick={() => handleEdit(selectionModel)}
          >
            Edit Old
          </Link>
        </div>
      </div>

      <DataGrid
        rows={products}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
      />
    </div>
  );
}

export default DataTable;
