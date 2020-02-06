import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function Header() {
  return (
    <header>
      <div className="header-area ">
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
                      <img src="assets/img/logo.png" alt=""/>
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><a className="active" href="/">home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="study.html">Case study</a></li>
                        <li><a href="#">blog <i className="ti-angle-down"></i></a>
                          <ul className="submenu">
                            <li><a href="blog.html">blog</a></li>
                            <li><a href="single-blog.html">single-blog</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="/about">About</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="Appointment">
                    <div className="book_btn d-none d-lg-block">
                      <a  href="#">Get a Quote</a>
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
