import React from 'react';

function ContactFormAreaTemplate() {
  return (
    <div className="contact_form_quote">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="form_wrap">
              <h3>Get Free Quote</h3>
              <form action="#">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
                <textarea name="#" id="" cols="30" rows="10" placeholder="Message" ></textarea>
                <button className="boxed-btn3">Send</button>
              </form>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-6">
            <div className="contact_thumb">
              <img src="assets/img/banner/contact_thumb.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFormAreaTemplate;
