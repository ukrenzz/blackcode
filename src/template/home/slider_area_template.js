import React from 'react';

const imgUrl1 = "assets/img/banner/banner_6.jpg";
const imgUrl2 = "assets/img/banner/banner_5.jpg";
const imgUrl3 = "assets/img/banner/banner_4.jpg";
const imgUrl4 = "assets/img/banner/banner_3.jpg";

const img_1 = {backgroundImage: 'url(' + imgUrl1 + ')'};
const img_2 = {backgroundImage: 'url(' + imgUrl2 + ')'};
const img_3 = {backgroundImage: 'url(' + imgUrl3 + ')'};
const img_4 = {backgroundImage: 'url(' + imgUrl4 + ')'};

function SliderAreaTemplate() {
  return (
    <div className="slider_area">
      <div className="slider_active owl-carousel">
        <div className="single_slider  d-flex align-items-center overlay2" style={img_3}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="slider_text ">
                  <h3>Kemudahan kamu <br/>
                    kami utamakan</h3>
                  <div className="video_service_btn">
                    <a href="#" className="boxed-btn3">Pesan Jasa</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single_slider  d-flex align-items-center overlay2" style={img_1}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="slider_text ">
                  <h3>Menyediakan desain <br/>
                    yang menarik</h3>
                  <div className="video_service_btn">
                    <a href="#" className="boxed-btn3">Lihat Portofolio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single_slider  d-flex align-items-center overlay2" style={img_2}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="slider_text ">
                  <h3>Kreatif dalam <br/>
                    pengerjaan</h3>
                  <div className="video_service_btn">
                    <a href="#" className="boxed-btn3">Lihat Portofolio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single_slider  d-flex align-items-center overlay2" style={img_4}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="slider_text ">
                  <h3>Deadline adalah <br/>
                    janji kami</h3>
                  <div className="video_service_btn">
                    <a href="#" className="boxed-btn3">Pesan Desainmu</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderAreaTemplate;
