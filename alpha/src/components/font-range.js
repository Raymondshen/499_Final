import React from 'react';

const FontRange = ({ id, size, setSize }) => {
    return (<div id="selectfont" className="fontsize-slider-container flex-row">
      <span className="txt-purewhite fontsize-head">{size[id].name}</span>
      <input className="fontsize-slider-track fontsize-slider-track-limited-width" type="range" value={size[id].size} min={size[id].min} max={size[id].max} onChange={setSize} data-id={id} />
      <input className="fontsize-slider-input" type="number" value={size[id].size} min={size[id].min} max={size[id].max} onChange={setSize} data-id={id} />
    </div>);
  }

  export { FontRange };