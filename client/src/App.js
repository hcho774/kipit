import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./components/formsource";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [offices, setOffices] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // navigate.push('/')

  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then((products) => setProducts(products));
  }, []);

  useEffect(() => {
    fetch("/offices")
      .then((r) => r.json())
      .then((offices) => setOffices(offices));
  }, []);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} navigate={navigate} />;

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home products={products} offices={offices} navigate={navigate} />
          }
        />

        <Route
          exact
          path="/products"
          element={<List products={products} setProducts={setProducts} />}
        />

        <Route
          exact
          path="/products/new"
          element={<New inputs={userInputs} title="Add New User" />}
        />

        <Route exact path="/products/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <Route exact path="/">
            <Route index element={<Home />} />
          </Route>
          <Route exact path="/login">
           <Login />
          </Route> */
}
{
  /* <Route exact path="/">
          <Route
            index
            element={<Home products={products} offices={offices} />}
          />
          <Route path="login" element={<Login />} />
          <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
          <Route path="products">
            <Route
              index
              element={<List products={products} setProducts={setProducts} />}
            />
            <Route path=":productsId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Route> */
}
