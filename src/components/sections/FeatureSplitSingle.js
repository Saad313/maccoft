import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeatureSplitSingle = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

//   const sectionHeader = {
//     title: 'Workflow that just works',
//     paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
//   };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" style={{color:"#145f9a"}}>
                  MACCOFT
                  </div>
                <h2 className="mt-0 mb-0">
                  We Are <span style={{color:"#145f9a"}}>Defining</span>
                  </h2>
                  <h2 className="mt-0">
                  The Future's Edge
                  </h2>
                  <div>
                  <Image
                  src={require('./../../assets/images/HeroHeader.jpeg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                  </div>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div style={{marginTop:"40px"}}>
                  <Link to="#0" className="button button-primary button-wide-mobile button-sm">Contact Us <span style={{marginLeft:"12px", marginTop:"2px"}}><svg fill="white" width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 6 6 L 6 8.15625 L 22.53125 16 L 6 23.84375 L 6 26 L 26 16.78125 L 26 15.21875 Z"/></svg></span></Link>
                  </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/HeroPic.jpeg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeatureSplitSingle.propTypes = propTypes;
FeatureSplitSingle.defaultProps = defaultProps;

export default FeatureSplitSingle;