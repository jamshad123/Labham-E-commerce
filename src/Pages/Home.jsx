import React from "react";
import BannerSlider from "../components/BannerSlider";
import ProductCat from "../components/ProductCat";
import ProductList from "../components/ProductList";
import OfferSlider from "../components/OfferSlider";
import CustomerReview from "../components/CustomerReview";

function Home() {
  return (
    <>
      <BannerSlider />
      <ProductCat />
      <ProductList/> 
      <OfferSlider/>
      <CustomerReview/>
    </>
  );
}

export default Home;
