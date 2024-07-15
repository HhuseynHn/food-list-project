/** @format */

export const clickEvnt = () => {
  let home = document.querySelector(".home-backgorund-image");
  let mainContnr = document.querySelector(".main-container");
  let productListPage = document.querySelector(".product-container");

  if (!home || !mainContnr || !productListPage) {
    console.log("EROR");
    return;
  }

  home.classList.toggle("hide");
  mainContnr.classList.toggle("hide");
  productListPage.classList.toggle("hide");
};
