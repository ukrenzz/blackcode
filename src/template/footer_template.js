import React from 'react';

function FooterTemplate() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <div className="footer_logo">
                  <a href="#">
                    <img src="img/footer_logo.png" alt=""/>
                  </a>
                </div>
                <p>
                  <a href="#">info@b-code.xyz</a> <br/>
                  +62 822 7664 0895<br/>
                  JSPulsa<br/>
                  Jl. Besar Delitua No. 62 Sidomulyo A<br/>
                  Deli Serdang, Sumatera Utara
                </p>
                <div className="socail_links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">
                  Pelayanan
                </h3>
                <ul>
                  <li><a href="#">Desain Grafis</a></li>
                  <li><a href="#">Cetakan</a></li>
                  <li><a href="#">Desain Website</a></li>
                  <li><a href="#">Aplikasi Sederhana</a></li>
                  <li><a href="#">Aplikasi Perusahaan</a></li>
                  <li><a href="#">Aplikasi Tugas Akhir</a></li>
                </ul>

              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">
                  Halaman
                </h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Portofolio</a></li>
                  <li><a href="#">Tentang Kami</a></li>
                  <li><a href="#">Kontak Kami</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_widget">
                <h3 className="footer_title">
                  Langganan
                </h3>
                <form action="#" className="newsletter_form">
                  <input type="text" placeholder="Email anda..."/>
                  <button type="submit">Subscribe</button>
                </form>
                <p className="newsletter_text">Dapatkan pembaharuan jasa dan diskon melalui berlangganan email.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text">
        <div className="container">
          <div className="footer_border"></div>
          <div className="row">
            <div className="col-xl-12">
              <p className="copy_right text-center">
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterTemplate;
