import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import SectionHeader from './partials/SectionHeader';


const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  
  const sectionHeader = {
    title: "Let's Discuss Your Project",
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
    customColor:"white",
  };
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" style={{borderRadius:"2px"}}>
        <div
          className={innerClasses}
          style={{borderRadius:"25px", backgroundColor:"#1974c6"}}
        >
          <SectionHeader data={sectionHeader} className="cta-slogan center-content" />
          {/* <div className="cta-slogan">
            <h2 className="m-0">
              Lets Discuss Your Project
              </h2>
          </div> */}
          {/* <div className="cta-action"> */}
          <div className="cta-action">

            <Button size="lg" id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Talk To Our Expert" style={{borderRadius:"10px", background:"none", borderColor:"white", borderWidth:"2px"}}>
            <span style={{color:"white"}}>Talk To Our Expert</span>
            <div style={{marginLeft:"15px"}}>
              <svg fill="white" width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 6 6 L 6 8.15625 L 22.53125 16 L 6 23.84375 L 6 26 L 26 16.78125 L 26 15.21875 Z"/></svg>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;