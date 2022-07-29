import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import AppWithRouter from "./App";
import { UserContextProvider } from "./contexts/user.context";
import { ProductsContextProvider } from "./contexts/products.context";
import CartContextProvider from "./contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <AppWithRouter />
        </CartContextProvider>
      </ProductsContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);


// {/* </React.StrictMode> */ }
// {/* <React.StrictMode> */ }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
