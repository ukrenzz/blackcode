import React                from 'react';
import Header               from '../template/home/header_transparant';
import SliderArea           from '../template/home/slider_area_template';
import ServiceArea          from '../template/service_area_template';
import AboutArea            from '../template/about_info_area_template';
import CounterArea          from '../template/counter_area_template';
import CaseStudyArea        from '../template/case_study_area_template';
import AccordionArea        from '../template/accordion_area_template';
import TestimonialArea      from '../template/testimonial_area_template';
import TeamArea             from '../template/team_area_template';
import ContactFormQuoteArea from '../template/contact_form_quote_template';
import InformationArea      from '../template/information_area_template';
import Footer               from '../template/footer_template';

function HomePages() {
  return (
    <React.Fragment>
      <Header />
      <SliderArea />
      <ServiceArea />
      <AboutArea />
      <TestimonialArea />
      <TeamArea />
      <ContactFormQuoteArea />
      <InformationArea />
      <Footer />
    </React.Fragment>
  )
}

export default HomePages;
