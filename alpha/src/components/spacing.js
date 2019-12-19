import React from 'react';

const Spacing = ({ id, spacing, setTracking, setLeading }) => {
    return (
      <div className="spacingfont fontsize-slider-container">
  
        <h5 className="txt-purewhite spacing-width-100">{spacing[id].name}</h5>
        <br />
        <div className="spacing-lead spacing-width flex-row">
          <span className="txt-purewhite spacing-head-label">{spacing[id].label2}</span>
          <input className="fontsize-slider-track fontsize-slider-track-limited-width col--8 m-xs-ts" type="range" value={spacing[id].leadingSize} min={spacing[id].leadingMin} max={spacing[id].leadingMax} onChange={setLeading} data-id={id} />
          <input className="fontsize-slider-input spacing-input" type="number" value={spacing[id].leadingSize} min={spacing[id].leadingMin} max={spacing[id].leadingMax} onChange={setLeading} data-id={id} />
        </div>
        <br />
        <div className="spacing-track spacing-width flex-row">
          <span className="txt-purewhite spacing-head-label">{spacing[id].label1}</span>
          <input className="fontsize-slider-track fontsize-slider-track-limited-width" type="range" value={spacing[id].trackingSize} min={spacing[id].trackingMin} max={spacing[id].trackingMax} onChange={setTracking} data-id={id} />
          <input className="fontsize-slider-input spacing-input" type="number" value={spacing[id].trackingSize} min={spacing[id].trackingMin} max={spacing[id].trackingMax} onChange={setTracking} data-id={id} />
        </div>
      </div>);
  }

  export { Spacing };