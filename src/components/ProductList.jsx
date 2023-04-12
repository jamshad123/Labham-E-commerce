import React from "react";
import { Link } from "react-router-dom";
import prod1 from "../Images/prod-1.png";
import prod2 from "../Images/prod-2.png";
import prod3 from "../Images/prod-3.png";
import prod4 from "../Images/prod-4.png";
import prod5 from "../Images/prod-5.png";
import prod6 from "../Images/prod-6.png";
import prod7 from "../Images/prod-7.png";
import prod8 from "../Images/prod-8.png";
import varified from "../Images/eclipse/varified.png";
import rating from "../Images/eclipse/rating.png";
import { MdNavigateNext } from "react-icons/md";


function ProductList() {
  return (
    <div className="sec-pad row pro-list pt-0">
      <div className="col-lg-6">
        <h2 className="">Most popular</h2>
      </div>
      <div className="col-lg-6 text-end view-all">
        <Link to="#">
          View All<span><MdNavigateNext/></span>
        </Link>
      </div>
      <div className="col-lg-12 row gy-5 mt-0">
        <div className="col-lg-3 col-md-6 col-sm-12 product">
          <img src={prod1} alt="prod-1" className="w-100 prod-img" />
          <div className="off-head">
            <p className="off">
              56%
              <br />
              Off
            </p>
          </div>
          <div className="product-inner row">
            <h3>ZION LIGHT</h3>
            <div className="col-6">
              <p className="m-0">SIZE : 250x375mm</p>
            </div>
            <div className="col-6">
              <p className="m-0 text-end">
                <span>₹15200</span>
              </p>
            </div>
            <div className="col-12 text-center pt-3 align-items-center">
              <p className="var-rate">
                <img src={rating} alt="rating" className="me-1" />
                4.3 | <img src={varified} alt="varified" /> 86 Reviews
              </p>
            </div>
            <button className="atc-btn">Add to cart</button>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 product">
          <img src={prod2} alt="prod-1" className="w-100 prod-img" />
          <div className="off-head">
            <p className="off">
              56%
              <br />
              Off
            </p>
          </div>
          <div className="product-inner row">
            <h3>ZION LIGHT</h3>
            <div className="col-6">
              <p className="m-0">SIZE : 250x375mm</p>
            </div>
            <div className="col-6">
              <p className="m-0 text-end">
                <span>₹15200</span>
              </p>
            </div>
            <div className="col-12 text-center pt-3 align-items-center">
              <p className="var-rate">
                <img src={rating} alt="rating" className="me-1" />
                4.3 | <img src={varified} alt="varified" /> 86 Reviews
              </p>
            </div>
            <button className="atc-btn">Add to cart</button>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 product">
          <img src={prod3} alt="prod-1" className="w-100 prod-img" />
          <div className="off-head">
            <p className="off">
              56%
              <br />
              Off
            </p>
          </div>
          <div className="product-inner row">
            <h3>ZION LIGHT</h3>
            <div className="col-6">
              <p className="m-0">SIZE : 250x375mm</p>
            </div>
            <div className="col-6">
              <p className="m-0 text-end">
                <span>₹15200</span>
              </p>
            </div>
            <div className="col-12 text-center pt-3 align-items-center">
              <p className="var-rate">
                <img src={rating} alt="rating" className="me-1" />
                4.3 | <img src={varified} alt="varified" /> 86 Reviews
              </p>
            </div>
            <button className="atc-btn">Add to cart</button>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 product">
          <img src={prod4} alt="prod-1" className="w-100 prod-img" />
          <div className="off-head">
            <p className="off">
              56%
              <br />
              Off
            </p>
          </div>
          <div className="product-inner row">
            <h3>ZION LIGHT</h3>
            <div className="col-6">
              <p className="m-0">SIZE : 250x375mm</p>
            </div>
            <div className="col-6">
              <p className="m-0 text-end">
                <span>₹15200</span>
              </p>
            </div>
            <div className="col-12 text-center pt-3 align-items-center">
              <p className="var-rate">
                <img src={rating} alt="rating" className="me-1" />
                4.3 | <img src={varified} alt="varified" /> 86 Reviews
              </p>
            </div>
            <button className="atc-btn">Add to cart</button>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 product">
          <img src={prod5} alt="prod-1" className="w-100 prod-img" />
          <div className="off-head">
            <p className="off">
              56%
              <br />
              Off
            </p>
          </div>
          <div className="product-inner row">
            <h3>ZION LIGHT</h3>
            <div className="col-6">
              <p className="m-0">SIZE : 250x375mm</p>
            </div>
            <div className="col-6">
              <p className="m-0 text-end">
                <span>₹15200</span>
              </p>
            </div>
            <div className="col-12 text-center pt-3 align-items-center">
              <p className="var-rate">
                <img src={rating} alt="rating" className="me-1" />
                4.3 | <img src={varified} alt="varified" /> 86 Reviews
              </p>
            </div>
            <button className="atc-btn">Add to cart</button>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 product">
          <img src={prod6} alt="prod-1" className="w-100 prod-img" />
          <div className="off-head">
            <p className="off">
              56%
              <br />
              Off
            </p>
          </div>
          <div className="product-inner row">
            <h3>ZION LIGHT</h3>
            <div className="col-6">
              <p className="m-0">SIZE : 250x375mm</p>
            </div>
            <div className="col-6">
              <p className="m-0 text-end">
                <span>₹15200</span>
              </p>
            </div>
            <div className="col-12 text-center pt-3 align-items-center">
              <p className="var-rate">
                <img src={rating} alt="rating" className="me-1" />
                4.3 | <img src={varified} alt="varified" /> 86 Reviews
              </p>
            </div>
            <button className="atc-btn">Add to cart</button>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 product">
          <img src={prod7} alt="prod-1" className="w-100 prod-img" />
          <div className="off-head">
            <p className="off">
              56%
              <br />
              Off
            </p>
          </div>
          <div className="product-inner row">
            <h3>ZION LIGHT</h3>
            <div className="col-6">
              <p className="m-0">SIZE : 250x375mm</p>
            </div>
            <div className="col-6">
              <p className="m-0 text-end">
                <span>₹15200</span>
              </p>
            </div>
            <div className="col-12 text-center pt-3 align-items-center">
              <p className="var-rate">
                <img src={rating} alt="rating" className="me-1" />
                4.3 | <img src={varified} alt="varified" /> 86 Reviews
              </p>
            </div>
            <button className="atc-btn">Add to cart</button>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 product">
          <img src={prod8} alt="prod-1" className="w-100 prod-img" />
          <div className="off-head">
            <p className="off">
              56%
              <br />
              Off
            </p>
          </div>
          <div className="product-inner row">
            <h3>ZION LIGHT</h3>
            <div className="col-6">
              <p className="m-0">SIZE : 250x375mm</p>
            </div>
            <div className="col-6">
              <p className="m-0 text-end">
                <span>₹15200</span>
              </p>
            </div>
            <div className="col-12 text-center pt-3 align-items-center">
              <p className="var-rate">
                <img src={rating} alt="rating" className="me-1" />
                4.3 | <img src={varified} alt="varified" /> 86 Reviews
              </p>
            </div>
            <button className="atc-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
