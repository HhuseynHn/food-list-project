/** @format */

import React, { useState } from "react";
import foodData from "../../constant/food-data";
import ProductItem from "./product-item";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./product-style.css";
import { clickEvnt } from "../reusable/clickEvnt/clickEvent";

const ProductList = () => {
  const [src, srcSet] = useState(foodData[0].imgSrc);

  const hundleImgSrc = (imageSrc) => {
    srcSet(imageSrc);
  };
  return (
    <>
      <div className="product-container hide">
        <ul className="product-list">
          <li className="default-img">
            <ProductItem imgSrc={src} price={foodData[0].price} />
          </li>
          <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={25}
            autoPlay={false}>
            {foodData.map((food) => (
              <li key={food.id}>
                <ProductItem
                  onClick={() => hundleImgSrc(food.imgSrc)}
                  imgSrc={food.imgSrc}
                  name={food.name}
                  price={food.price}
                />
              </li>
            ))}
          </Carousel>
        </ul>
        <div className="x-btn">
          <button>
            <i className="fa-solid fa-xmark" onClick={clickEvnt}></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
