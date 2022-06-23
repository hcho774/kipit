import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";
function New({ title, user, setUser, navigate }) {
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    product: "",
    img: "",
    merchant: "",
    payment: 0,
    price: 0,
    quantity: 0,
    status: "",
    user_id: user.id,
  });

  function onChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((product) => console.log(product));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  // resetting the form

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavBar setUser={setUser} user={user} navigate={navigate} />
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
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                {/* <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label> */}
                {/* <input
                  type="file"
                  id="file"
                  onChange={onChange}
                  value={formData.img}
                  style={{ display: "none" }}
                /> */}
                <label>Image</label>
                <input
                  type="text"
                  placeholder="url"
                  name="img"
                  onChange={onChange}
                  value={formData.img}
                />
              </div>

              <div className="formInput">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder=""
                  name="product"
                  onChange={onChange}
                  value={formData.product}
                />
              </div>

              <div className="formInput">
                <label>Merchant</label>
                <input
                  type="text"
                  placeholder=""
                  name="merchant"
                  onChange={onChange}
                  value={formData.merchant}
                />
              </div>

              <div className="formInput">
                <label>Payment</label>
                <input
                  type="text"
                  placeholder=""
                  name="payment"
                  onChange={onChange}
                  value={formData.payment}
                />
              </div>

              <div className="formInput">
                <label>Price</label>
                <input
                  type="text"
                  placeholder=""
                  name="price"
                  onChange={onChange}
                  value={formData.price}
                />
              </div>

              <div className="formInput">
                <label>Quantity</label>
                <input
                  type="text"
                  placeholder=""
                  name="quantity"
                  onChange={onChange}
                  value={formData.quantity}
                />
              </div>

              <div className="formInput">
                <label>Status</label>
                <input
                  type="text"
                  placeholder=""
                  name="status"
                  onChange={onChange}
                  value={formData.status}
                />
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
