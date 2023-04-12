import React from 'react'
import "./Footer.css"

import logo from "../../assets/logo.svg";
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaSnapchatGhost } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer >


        <div className="footer__top">
            <a href="#">
              <img src={logo} alt={logo} />
            </a>

            <div className="socialmedia__footer">
                <h2>Social Media</h2>
                <ul>
                  <li> <a href="#"><AiFillFacebook/></a></li>
                  <li> <a href="#"><AiFillInstagram/></a></li>
                  <li> <a href="#"><AiFillTwitterCircle/></a></li>
                  <li> <a href="#"><FaSnapchatGhost/></a></li>
                </ul>
            </div>

        </div>

        <div className="footer__bottom">
            <p>Copyright ©️ 2021 Fetch . All rights reserved </p>
        </div>

      </footer>
  )
}

export default Footer