import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import offer1 from "../Images/offer1.png"
import offer2 from "../Images/offer2.png"
import offer3 from "../Images/offer3.png"
import { MdNavigateNext } from "react-icons/md";



function OfferSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      
    
      };
  return (
    <div className="sec-pad pt-0 offer-slider row">
      <div className="col-lg-6">
        <h2 className="mb-5">
          Top<span> Brands</span>
        </h2>
      </div>
      <div className="col-lg-6 text-end view-all">
        <Link to="#">
          View All<span><MdNavigateNext/></span>
        </Link>
      </div>
      <div className="col-12">
      <Slider {...settings} className="slider-inner">
        <div>
          <img src={offer1} alt="" className="w-100" />
        </div>
        <div>
          <img src={offer2} alt="" className="w-100" />
        </div>
        <div>
          <img src={offer3} alt="" className="w-100" />
        </div>
        <div>
          <img src={offer1} alt="" className="w-100" />
        </div>
        <div>
          <img src={offer2} alt="" className="w-100" />
        </div>
        <div>
          <img src={offer3} alt="" className="w-100" />
        </div>
      </Slider>
      </div>
    </div>
  );
}

export default OfferSlider;
