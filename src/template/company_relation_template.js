import React from 'react';

function CompanyRelationTemplate() {
  return (
    <div className="company_relation mt-5" id="company_relationEl">
      <div className="container pt-5">
        <div className="border_bottom">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title mb-1 text-center">
                <h3>
                  Partner
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="company_relation_slider owl-carousel">
              <div className="col-xl-10 m-auto col-lg-10 col-md-10 col-11">
                <div className="company_logo" >
                  <img src="assets/img/relation/amazon_PNG9.png"/>
                </div>
              </div>
              <div className="col-xl-10 m-auto col-lg-10 col-md-10 col-11">
                <div className="company_logo align-middle">
                  <img src="assets/img/relation/blibli.png" alt=""/>
                </div>
              </div>
              <div className="col-xl-10 m-auto col-lg-10 col-md-10 col-11">
                <div className="company_logo align-middle">
                  <img src="assets/img/relation/jspulsa.png" alt=""/>
                </div>
              </div>
              <div className="col-xl-10 m-auto col-lg-10 col-md-10 col-11">
                <div className="company_logo align-middle">
                  <img src="assets/img/relation/cannon.png" alt=""/>
                </div>
              </div>
              <div className="col-xl-10 m-auto col-lg-10 col-md-10 col-11">
                <div className="company_logo align-middle">
                  <img src="assets/img/relation/epson.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyRelationTemplate;
