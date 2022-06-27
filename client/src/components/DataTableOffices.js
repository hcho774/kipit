import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { Link } from "react-router-dom";
import { useState } from "react";
import "./datatableOffices.scss";

function DataTableOffices({
  products,
  setProducts,
  navigate,
  handleEdit,
  offices,
  setOffices,
}) {
  const [productId, setProductId] = useState();
  const [selectionModel, setSelectionModel] = useState([]);

  function handleDelete(id) {
    fetch(`/offices/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setOffices(offices.filter((item) => item.id !== id));
      }
    });
  }

  // function handleView(id) {
  //   navigate(`offices/${productId}`);
  // }
  const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "office_name",
      headerName: "Office",
      width: 230,
      renderCell: (params) => {
        return <div className="cellWithImg">{params.row.office_name}</div>;
      },
    },
    {
      field: "location",
      headerName: "Locations",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.location}`}>
            {params.row.location}
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
              // onClick={() => handleView(params.row.id)}
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
        Add & Edit Offices
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
        rows={offices}
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

export default DataTableOffices;
