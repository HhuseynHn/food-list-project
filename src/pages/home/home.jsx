/** @format */

import React from "react";
import Header from "../../compnents/layout/header/header";
import ProductList from "../../compnents/product/product-list";
import Title from "../../compnents/reusable/title/title";
import "./home-style.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="home-backgorund-image">
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/02/07/56/1000_F_202075610_MGQKkqilBtXnLwMtWlSDvFrrW2kbYYgl.jpg"
            alt="Background"
          />
          <div className="backgr-opactity"></div>
        </div>
        <div className="main-container">
          <div className="home-title-c">
            <div className="home-title">
              <Title />
            </div>
          </div>
        </div>
        <ProductList />
      </main>
    </>
  );
};

export default Home;
