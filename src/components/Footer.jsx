import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiPhoneCall  } from "react-icons/fi";


function Footer() {
  return (
    <>
    <div className="row footer">
      <div className="col-lg-6 col-md-12 col-12 contact">
        <h1 className="mb-5">LABHAM HOUSE</h1>
        <h3 className="mb-4">Contact Us</h3>

        <div className="d-flex">
          <div className="me-2">
            <FaWhatsapp />
          </div>
          <div className="">
            <p className="m-0">WhatsApp</p>
            <p className="p-0">
              <Link to="#">+1 202-918-2132</Link>
            </p>
          </div>
        </div>
        <div className="d-flex">
          <div className="me-2">
            <FiPhoneCall />
          </div>
          <div className="">
            <p className="m-0">Call Us</p>
            <p className="p-0">
              <Link to="#">+1 202-918-2132</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <h4>Most Popular Categories</h4>
        <ul>
            <li>
                <Link to="#">TILES</Link>
            </li>
            <li>
                <Link to="#">PIPES</Link>
            </li>
            <li>
                <Link to="#">BATHROOM FITTINGS</Link>
            </li>
            <li>
                <Link to="#">LIGHTS</Link>
            </li>
            <li>
                <Link to="#">SWITCH BOARDS</Link>
            </li>
            <li>
                <Link to="#">WOOD FLOORING</Link>
            </li>
            <li>
                <Link to="#">WIRES</Link>
            </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
      <h4>Customer Services</h4>

        <ul>
            <li>
                <Link to="#">About Us</Link>
            </li>
            <li>
                <Link to="#">Terms & Conditions</Link>
            </li>
            <li>
                <Link to="#">FAQ</Link>
            </li>
            <li>
                <Link to="#">Privacy Policy</Link>
            </li>
            <li>
                <Link to="#">E-waste Policy</Link>
            </li>
            <li>
                <Link to="#">Cancellation & Return Policy</Link>
            </li>
        </ul>
      </div>
    </div>
      <div className="col-12 footer-bottom"><p>© 2022 All rights reserved. ERE BUSINESS SOLUTIONS</p></div>
    </>
  );
}

export default Footer;
