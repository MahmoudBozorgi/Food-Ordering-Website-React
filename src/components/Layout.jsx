import React from "react";
import Header from "./Header";
import Routers from "../routes/Routers";
import Footer from "./Footer";
import Carts from "./UI/cart/Carts";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <>
      <Header />
      {showCart && <Carts />}
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
