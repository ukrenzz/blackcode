import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function ServiceAreaTemplate() {
  return (
    <div className="service_area" id="servicesAreaEl">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-50">
              <h3>What we Do?</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service text-center">
              <div className="service_icon">
                <img src="assets/img/svg_icon/1.svg" alt=""/>
              </div>
              <h3>Desain Grafis</h3>
              <p>Memberikan pelayanan terbaik dalam desain segala keperluan anda dengan efisien.</p>
              <a href="#" className="learn_more">Learn More</a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service text-center">
              <div className="service_icon">
                <img src="assets/img/svg_icon/2.svg" alt=""/>
              </div>
              <h3>Cetakan</h3>
              <p>Menerima segala jenis cetakan seperti banner, undangan, kalender, dan lainnya</p>
              <a href="#" className="learn_more">Learn More</a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service text-center">
              <div className="service_icon">
                <img src="assets/img/svg_icon/3.svg" alt=""/>
              </div>
              <h3>Desain Website</h3>
              <p>Merancang tata letak ataupun pembuatan website statis yang keren untuk keperluan anda.</p>
              <a href="#" className="learn_more">Learn More</a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service text-center">
              <div className="service_icon">
                <img src="assets/img/svg_icon/4.svg" alt=""/>
              </div>
              <h3>Aplikasi Sederhana</h3>
              <p>Menyediakan banyak aplikasi sederhana sebagai alat pembelajaran yang mudah dipahami.</p>
              <a href="#" className="learn_more">Learn More</a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service text-center">
              <div className="service_icon">
                <img src="assets/img/svg_icon/5.svg" alt=""/>
              </div>
              <h3>Aplikasi Perusahaan</h3>
              <p>Pembuatan aplikasi untuk perusahaan seperti inventory, billing, dan lainnya.</p>
              <a href="#" className="learn_more">Learn More</a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service text-center">
              <div className="service_icon">
                <img src="assets/img/svg_icon/6.svg" alt=""/>
              </div>
              <h3>Aplikasi Tugas Akhir</h3>
              <p>Menerima pembuatan aplikasi tugas akhir seperti dengan efisien dan mudah dipahami.</p>
              <a href="#" className="learn_more">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceAreaTemplate;
