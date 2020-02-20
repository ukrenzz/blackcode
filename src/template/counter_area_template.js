import React from 'react';

function CounterAreaTemplate() {
  return (
    <div className="counter_area counter_bg_1 overlay_03">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3">
            <div className="single_counter text-center">
              <div className="counter_icon">
                <img src="assets/img/svg_icon/group.svg" alt=""/>
              </div>
              <h3> <span className="counter">6</span>  </h3>
              <p>Jumlah anggota</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3">
            <div className="single_counter text-center">
              <div className="counter_icon">
                <img src="assets/img/svg_icon/cart.svg" alt=""/>
              </div>
              <h3> <span className="counter">97</span> <span>%</span> </h3>
              <p>Project Berhasil</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3">
            <div className="single_counter text-center">
              <div className="counter_icon">
                <img src="assets/img/svg_icon/heart.svg" alt=""/>
              </div>
              <h3> <span className="counter">10</span></h3>
              <p>Happy Client</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3">
            <div className="single_counter text-center">
              <div className="counter_icon">
                <img src="assets/img/svg_icon/respect.svg" alt=""/>
              </div>
              <h3> <span className="counter">11</span> </h3>
              <p>Proyek Selesai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterAreaTemplate;
