import React from "react";
import { Link } from "react-router-dom";
import p1 from "../Images/p-1.png";
import p2 from "../Images/p-2.png";
import p3 from "../Images/p-3.png";
import p4 from "../Images/p-4.png";
import p5 from "../Images/p-5.png";
import p6 from "../Images/p-6.png";
import { MdNavigateNext } from "react-icons/md";


function ProductCat() {
  return (
    <div className="row pro-cat sec-pad pt-0">
      <div className="col-lg-6">
        <h2 className="mb-5">
          Shop From <span>Top categories</span>
        </h2>
      </div>
      <div className="col-lg-6 text-end view-all">
        <Link to="#">
          View All<span><MdNavigateNext/></span>
        </Link>
      </div>
      <div className="col-lg-12 row">
        <div className="col-lg-2 text-center">
          <img src={p1} alt="pro-cat-1" />
          <p>TILES</p>
        </div>
        <div className="col-lg-2 text-center">
          <img src={p2} alt="pro-cat-2" />
          <p>PIPES</p>
        </div>
        <div className="col-lg-2 text-center">
          <img src={p3} alt="pro-cat-3" />
          <p>WIRING CABLES</p>
        </div>
        <div className="col-lg-2 text-center">
          <img src={p4} alt="pro-cat-4" />
          <p>LIGHTING</p>
        </div>
        <div className="col-lg-2 text-center">
          <img src={p5} alt="pro-cat-5" />
          <p>SWITCH BOARD</p>
        </div>
        <div className="col-lg-2 text-center">
          <img src={p6} alt="pro-cat-6" />
          <p>WASH BASIN</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCat;
