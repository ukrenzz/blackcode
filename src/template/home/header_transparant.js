import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Header() {
  return (
    <header id="headerElement">
      <div className="header-area">
        <div className="header-top_area d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-md-5 ">
                <div className="header_left">
                  <p>Selamat datang di Portofolio BlackCode Team</p>
                </div>
              </div>
              <div className="col-xl-7 col-md-7">
                <div className="header_right d-flex">
                  <div className="short_contact_list">
                    <ul>
                        <li><a href="#"> <i className="fa fa-envelope"></i> info@b-code.xyz</a></li>
                        <li><a href="#"> <i className="fa fa-phone"></i> +62 822-7664-0895</a></li>
                    </ul>
                  </div>
                  <div className="social_media_links">
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="main-header-area">
          <div className="container">
            <div className="header_bottom_border">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-2">
                  <div className="logo">
                    <a href="/">
                      <img src="assets/img/logo.png" alt="" width="100"/>
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><a href="#headerElement" class="actDisable"><Link className="Home" to="headerElement" spy={true} smooth={true} duration={250}>Home</Link></a></li>
                        <li><a href="#servicesAreaEl" class="actDisable"><Link className="Service" to="servicesAreaEl" spy={true} smooth={true} duration={250}>Layanan</Link></a></li>
                        <li><a href="#caseStudyAreaEl" class="actDisable"><Link className="Case" to="caseStudyAreaEl" spy={true} smooth={true} duration={250}>Portofolio</Link></a></li>
                        <li><a href="#teamAreaEl" class="actDisable"><Link className="Case" to="teamAreaEl" spy={true} smooth={true} duration={250}>Team</Link></a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="/about">About</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="Appointment">
                    <div className="book_btn d-none d-lg-block">
                      <a  href="#">Pesan Sesuatu</a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
