import React from "react";
import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";

function List({ products }) {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Merchant</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Price </TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="tableCell">{product.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={product.img} alt="" className="image" />
                  {product.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{product.merchant}</TableCell>
              <TableCell className="tableCell">
                {moment(product.created_at).format("MM/DD/YYYY")}
              </TableCell>
              <TableCell className="tableCell">
                $ {product.price.toFixed(2)}
              </TableCell>
              <TableCell className="tableCell">{product.payment}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${product.status}`}>
                  {product.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
