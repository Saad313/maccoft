import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeatureSplitSingle from '../components/sections/FeatureSplitSingle';

import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SectionHeaderParent from '../components/sections/SectionHeaderParent';

const Home = () => {

  return (
    <>
    <FeatureSplitSingle invertMobile topDivider imageFill className="illustration-section-02" />
    <SectionHeaderParent invertMobile topDivider imageFill className="illustration-section-02" />
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;