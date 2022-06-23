import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";
function New({ inputs, title }) {
  const [formData, setFormData] = useState({
    product: "",
    img: "",
    merchant: "",
    payment: 0,
    price: 0,
    quantity: 0,
    user_id: "",
  });

  function onChange() {}

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              <div className="formInput">
                <label>Product Name</label>
                <input type="text" placeholder="" />
              </div>

              <div className="formInput">
                <label>Merchant</label>
                <input type="text" placeholder="" />
              </div>

              <div className="formInput">
                <label>Payment</label>
                <input type="text" placeholder="" />
              </div>

              <div className="formInput">
                <label>Price</label>
                <input type="text" placeholder="" />
              </div>

              <div className="formInput">
                <label>Quantity</label>
                <input type="text" placeholder="" />
              </div>

              {/* {inputs.map((input) => (
                <div className="formInput" >
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
