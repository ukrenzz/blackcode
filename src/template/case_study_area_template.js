import React from 'react';

function CaseStudyAreaTemplate() {
  return (
    <div className="case_study_area" id="caseStudyAreaEl">
      <div className="container">
        <div className="border_bottom">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-40">
                <h3>Portofolio</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="case_active owl-carousel">
                <div className="single_case">
                  <div className="case_thumb">
                    <img src="assets/img/case/1.png" alt=""/>
                  </div>
                  <div className="case_heading">
                    <span>Finance Solution</span>
                    <h3><a href="#">Consumer Products Consulting</a></h3>
                  </div>
                </div>
                <div className="single_case">
                  <div className="case_thumb">
                    <img src="assets/img/case/2.png" alt=""/>
                  </div>
                  <div className="case_heading">
                    <span>Finance Solution</span>
                    <h3><a href="#">Consumer Products Consulting</a></h3>
                  </div>
                </div>
                <div className="single_case">
                  <div className="case_thumb">
                    <img src="assets/img/case/3.png" alt=""/>
                  </div>
                  <div className="case_heading">
                    <span>Finance Solution</span>
                    <h3><a href="#">Consumer Products Consulting</a></h3>
                  </div>
                </div>
                <div className="single_case">
                  <div className="case_thumb">
                    <img src="assets/img/case/1.png" alt=""/>
                  </div>
                  <div className="case_heading">
                    <span>Finance Solution</span>
                    <h3><a href="#">Consumer Products Consulting</a></h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="more_close_btn text-center">
                <a href="#" className="boxed-btn3-line">More Cases</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyAreaTemplate;
