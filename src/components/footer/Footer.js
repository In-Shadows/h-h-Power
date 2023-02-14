import React from "react";

import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import "./footer.scss";
import Logo from "../../assets/logo.png";

const Footer = () => {
  const style = { color: "#fff", fontSize: "3rem" };

  return (
    <footer className="footer">
      <div className="footer__social">
        <div className="footer__logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer__social-links">
          <ul className="footer__social-links__list">
            <li className="footer__social-links__list-item">
              <AiFillFacebook style={style} />
            </li>
            <li className="footer__social-links__list-item">
              <AiFillTwitterCircle style={style} />
            </li>
            <li className="footer__social-links__list-item">
              <BsPinterest style={style} />
            </li>
            <li className="footer__social-links__list-item">
              <AiFillLinkedin style={style} />
            </li>
          </ul>
        </div>
      </div>

      <nav className="footer__navigation">
        <ul className="footer__navigation__list">
          <li className="footer__navigation__list-item">
            <a href="#" className="footer__navigation__link">
              Home
            </a>
          </li>
          <li className="footer__navigation__list-item">
            <a href="#" className="footer__navigation__link">
              About
            </a>
          </li>
          <li className="footer__navigation__list-item">
            <a href="#" className="footer__navigation__link">
              Projects
            </a>
          </li>
          <li className="footer__navigation__list-item">
            <a href="#" className="footer__navigation__link">
              Services
            </a>
          </li>
          <li className="footer__navigation__list-item">
            <a href="#" className="footer__navigation__link">
              Privacy Policy
            </a>
          </li>
          <li className="footer__navigation__list-item">
            <a href="#" className="footer__navigation__link">
              Terms Of Service
            </a>
          </li>
          <li className="footer__navigation__list-item">
            <a href="#" className="footer__navigation__link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <div className="copyright">
        <button className="btn">Contact Us</button>
        <p className="copyright__text">Copyright &copy; All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
