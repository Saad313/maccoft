import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const SectionHeaderParent = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0'
  );



  const sectionHeader = {
    title: "We're working on",
  };
 

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <div className="text-xxs text-color-primary fw-600 tt-u mb-8 center-content" style={{color:"#145f9a"}}>
                  About Us
                  </div>
                  <div className="center-content" style={{marginLeft:"8%"}}>
                  <Image
                  src={require('./../../assets/images/technology.jpeg')}
                  alt="Features split 01"
                  width={828}
                  height={396} />
                  </div>
          <SectionHeader data={sectionHeader} className="center-content" />



          <div >
                  <Image
                  src={require('./../../assets/images/technologies.jpeg')}
                  alt="Features split 01"
                  width='100%'
                  height={396} />
                  </div>


                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8" style={{color:"#145f9a", marginTop:"250px"}}>
                 Our Services
                  </div>

                  <div >
                  <Image
                  src={require('./../../assets/images/OurServices.jpeg')}
                  alt="Features split 01"
                  width='100%'
                  height={396} />
                  </div>
        </div>
      </div>
    </section>
  );
}

SectionHeaderParent.propTypes = propTypes;
SectionHeaderParent.defaultProps = defaultProps;

export default SectionHeaderParent;