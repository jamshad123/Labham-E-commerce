import React from "react";
import Slider from "react-slick";
import avatar from "../Images/avatar.png"
import { AiOutlineStar } from "react-icons/ai";


function CustomerReview() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, centerMode: true,
  };
  return (
    <div className="row review sec-pad pt-0 ">
      <h2 className="mb-3 r-head">Customer Reviews</h2>
      <div className="col-12">
        <Slider {...settings} className="slider-inner">
          <div>
            <div className="r-sec">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic
                ipsum in quod accusantium consequatur dolorum alias quo cumque
                magni iusto veniam soluta aperiam consequuntur, nobis esse! A,
                iste praesentium?
              </p>
              <div className="r-inner row align-items-center">
                <div className="col-4"><img src={avatar} alt="avatar" className="w-100" /></div>
                <div className="col-8"><p className="m-0">Manisha</p><p className="r-rating m-0">5.0<span className="ms-1"><AiOutlineStar/></span></p></div>
              </div>
            </div>
          </div>
          <div>
            <div className="r-sec">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic
                ipsum in quod accusantium consequatur dolorum alias quo cumque
                magni iusto veniam soluta aperiam consequuntur, nobis esse! A,
                iste praesentium?
              </p>
              <div className="r-inner row align-items-center">
                <div className="col-4"><img src={avatar} alt="avatar" className="w-100" /></div>
                <div className="col-8"><p className="m-0">Manisha</p><p className="r-rating m-0">5.0<span className="ms-1"><AiOutlineStar/></span></p></div>
              </div>
            </div>
          </div>
          <div>
            <div className="r-sec">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic
                ipsum in quod accusantium consequatur dolorum alias quo cumque
                magni iusto veniam soluta aperiam consequuntur, nobis esse! A,
                iste praesentium?
              </p>
              <div className="r-inner row align-items-center">
                <div className="col-4"><img src={avatar} alt="avatar" className="w-100" /></div>
                <div className="col-8"><p className="m-0">Manisha</p><p className="r-rating m-0">5.0<span className="ms-1"><AiOutlineStar/></span></p></div>
              </div>
            </div>
          </div>
          <div>
            <div className="r-sec">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic
                ipsum in quod accusantium consequatur dolorum alias quo cumque
                magni iusto veniam soluta aperiam consequuntur, nobis esse! A,
                iste praesentium?
              </p>
              <div className="r-inner row align-items-center">
                <div className="col-4"><img src={avatar} alt="avatar" className="w-100" /></div>
                <div className="col-8"><p className="m-0">Manisha</p><p className="r-rating m-0">5.0<span className="ms-1"><AiOutlineStar/></span></p></div>
              </div>
            </div>
          </div>
          <div>
            <div className="r-sec">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic
                ipsum in quod accusantium consequatur dolorum alias quo cumque
                magni iusto veniam soluta aperiam consequuntur, nobis esse! A,
                iste praesentium?
              </p>
              <div className="r-inner row align-items-center">
                <div className="col-4"><img src={avatar} alt="avatar" className="w-100" /></div>
                <div className="col-8"><p className="m-0">Manisha</p><p className="r-rating m-0">5.0<span className="ms-1"><AiOutlineStar/></span></p></div>
              </div>
            </div>
          </div>
          <div>
            <div className="r-sec">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic
                ipsum in quod accusantium consequatur dolorum alias quo cumque
                magni iusto veniam soluta aperiam consequuntur, nobis esse! A,
                iste praesentium?
              </p>
              <div className="r-inner row align-items-center">
                <div className="col-4"><img src={avatar} alt="avatar" className="w-100" /></div>
                <div className="col-8"><p className="m-0">Manisha</p><p className="r-rating m-0">5.0<span className="ms-1"><AiOutlineStar/></span></p></div>
              </div>
            </div>
          </div>
          <div>
            <div className="r-sec">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic
                ipsum in quod accusantium consequatur dolorum alias quo cumque
                magni iusto veniam soluta aperiam consequuntur, nobis esse! A,
                iste praesentium?
              </p>
              <div className="r-inner row align-items-center">
                <div className="col-4"><img src={avatar} alt="avatar" className="w-100" /></div>
                <div className="col-8"><p className="m-0">Manisha</p><p className="r-rating m-0">5.0<span className="ms-1"><AiOutlineStar/></span></p></div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CustomerReview;
