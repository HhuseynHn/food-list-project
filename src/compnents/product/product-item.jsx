/** @format */

import React from "react";

const ProductItem = ({ imgSrc, name, onClick, price }) => {
  return (
    <>
      <div className="product-item" onClick={onClick}>
        <div className="img-container">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="img-name">
          <h4>{name}</h4>
        </div>
        <div className="product-price">
          <h4>Price: {price}</h4>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
