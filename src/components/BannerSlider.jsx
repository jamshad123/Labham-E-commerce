import React from "react";
import Slider from "react-slick";
import banner from "../Images/banner.png";

function BannerSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  

  };
  return (
    <div className="container banner sec-pad">
      <Slider {...settings}>
        <div>
          <img src={banner} alt="" className="w-100" />
        </div>
        <div>
          <img src={banner} alt="" className="w-100" />
        </div>
        <div>
          <img src={banner} alt="" className="w-100" />
        </div>
      </Slider>
    </div>
  );
}

export default BannerSlider;
