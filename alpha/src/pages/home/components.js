import React from 'react';

import {
	Link,
} from 'react-router-dom';
//Question for pairing dock. How does one change the unique h1 for the user and not the whole document.

//Components that's global

//Pairing doc, pass font style as a property as well
const PairingDoc = ({ fontSizes,fontFamilies,spacings }) => {

  //console.log(spacings.size[1]);

  return (<div>
    <section className="grid p-xs-m">
      <h1 style={{ letterSpacing:spacings[0].trackingSize+'px', lineHeight:spacings[0].leadingSize+'%', fontSize:fontSizes[0].size+'px', fontFamily: fontFamilies.first.name }} className="col--12">An Adaptable Foundation</h1>
    </section>
    <section className="grid p-xs-m p-xs-hs">
      <div className="col--6">
        <h5 style={{letterSpacing:spacings[4].trackingSize+'px', lineHeight:spacings[4].leadingSize+'%', fontSize:fontSizes[4].size+'px', fontFamily: fontFamilies.first.name }}>Headline 5</h5>
        <p style={{ letterSpacing:spacings[5].trackingSize+'px', lineHeight:spacings[5].leadingSize+'%', fontSize:fontSizes[5].size+'px', fontFamily: fontFamilies.second.name }}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half.</p>
      </div>
      <div className="col--6 offset--7 p-xs-hs">
        <h3 style={{letterSpacing:spacings[2].trackingSize+'px', lineHeight:spacings[2].leadingSize+'%', fontSize:fontSizes[2].size+'px', fontFamily: fontFamilies.first.name }}>Headline 3</h3>
        <h4 style={{ letterSpacing:spacings[3].trackingSize+'px', lineHeight:spacings[3].leadingSize+'%', fontSize:fontSizes[3].size+'px', fontFamily: fontFamilies.first.name }}>Headline 4</h4>
        <p style={{ letterSpacing:spacings[5].trackingSize+'px', lineHeight:spacings[5].leadingSize+'%', fontSize:fontSizes[5].size+'px', fontFamily: fontFamilies.second.name }}>
          By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was.
          </p>
      </div>
    </section>
    <section className="p-xs-hs">
      <TypeHierarchy
        spacings={spacings}
        fontFamilies={fontFamilies}
        fontSizes={fontSizes}
      />
    </section>
  </div>
  );
}

//Click list from Hamilton
const ClickList = ({ data, families, callback }) => {
  // let r1 = Math.floor(Math.random() * data.length);
  // let r2 = Math.floor(Math.random() * data.filter((o,i)=>i!=r1).length);
  console.log(data)
  return (
    <section id="selectfont" className="flex-xs-parent flex-xs-wrap p-xs-txl">
      {data.map((o,i) => (
        <div className="font-card" key={i}>
          <div className="font-card-nav flex-xs-parent">
            <p className="txt-purewhite font-card-name" style={{fontFamily:o.name}}>{o.name}</p>
            <div className="font-card-btns-container flex-xs-parent txt-purewhite">
              <div className={`font-card-btns flex-xs-parent ${o.id==families.first.id?'chosen':''}`} onClick={() => callback({ first: o })}>H</div>
              <div className={`font-card-btns flex-xs-parent ${o.id==families.second.id?'chosen':''}`} onClick={() => callback({ second: o })}>B</div>
            </div>
          </div>
          <h4 className="txt-purewhite font-card-dummy" style={{fontFamily:o.name}}>Aa</h4>
        </div>
      ))}
    </section>
  );
}


//Components that's local
const TypeHierarchy = ({ fontFamilies, fontSizes, spacings }) => {
  return (
    <section>
      <h1 className="p-xs-bxs" style={{ letterSpacing:spacings[0].trackingSize+'px', lineHeight:spacings[0].leadingSize+'%', fontFamily: fontFamilies.first.name, fontSize: fontSizes[0].size+'px' }}>H1 / {fontFamilies.first.name}</h1>
      <div class="slider-info m-xs-bl">{fontSizes[0].size} / Letter Spacing {spacings[0].trackingSize} px / Line Height {spacings[0].leadingSize} % </div>

      <h2 className="p-xs-bxs" style={{ letterSpacing:spacings[1].trackingSize+'px', lineHeight:spacings[1].leadingSize+'%', fontFamily: fontFamilies.first.name, fontSize: fontSizes[1].size+'px' }}>H2 / {fontFamilies.first.name}</h2>
      <div class="slider-info m-xs-bl">{fontSizes[1].size} / Letter Spacing {spacings[1].trackingSize} px / Line Height {spacings[1].leadingSize} % </div>

      <h3 className="p-xs-bxs" style={{ letterSpacing:spacings[2].trackingSize+'px', lineHeight:spacings[2].leadingSize+'%', fontFamily: fontFamilies.first.name, fontSize: fontSizes[2].size+'px' }}>H3 / {fontFamilies.first.name}</h3>
      <div class="slider-info m-xs-bl">{fontSizes[2].size} / Letter Spacing {spacings[2].trackingSize} px / Line Height {spacings[2].leadingSize} % </div>

      <h4 className="p-xs-bxs" style={{ letterSpacing:spacings[3].trackingSize+'px', lineHeight:spacings[3].leadingSize+'%', fontFamily: fontFamilies.first.name, fontSize: fontSizes[3].size+'px' }}>H4 / {fontFamilies.first.name}</h4>
      <div class="slider-info m-xs-bl">{fontSizes[3].size} / Letter Spacing  {spacings[3].trackingSize} px / Line Height {spacings[3].leadingSize} % </div>

      <h5 className="p-xs-bxs" style={{ letterSpacing:spacings[4].trackingSize+'px', lineHeight:spacings[4].leadingSize+'%', fontFamily: fontFamilies.first.name, fontSize: fontSizes[4].size+'px' }}>H5 / {fontFamilies.first.name}</h5>
      <div class="slider-info m-xs-bl">{fontSizes[4].size} / Letter Spacing {spacings[4].trackingSize} px / Line Height {spacings[4].leadingSize} % </div>

      <p className="p-xs-bxs" style={{ letterSpacing:spacings[5].trackingSize+'px', lineHeight:spacings[5].leadingSize+'%', fontFamily: fontFamilies.second.name, fontSize: fontSizes[5].size+'px' }}>p / {fontFamilies.second.name}</p>
      <div class="slider-info m-xs-bl">{fontSizes[5].size} / Letter Spacing {spacings[5].trackingSize} px / Line Height {spacings[5].leadingSize} % </div>
    </section>
  );
}

const FontRange = ({id,size,setSize}) => {
	return (<div id="selectfont" className="fontsize-slider-container flex-row">
		<span className="txt-purewhite fontsize-head">{size[id].name}</span>
		<input className="fontsize-slider-track" type="range" value={size[id].size} min={size[id].min} max={size[id].max} onChange={setSize} data-id={id}/>
		<input className="fontsize-slider-input" type="number" value={size[id].size} min={size[id].min} max={size[id].max} onChange={setSize} data-id={id}/>
	</div>);
}

const Spacing = ({id,spacing,setTracking, setLeading}) => {
	return (<div id="selectfont" className="fontsize-slider-container flex-row">
    <h5 className="txt-purewhite fontsize-head">{spacing[id].name}</h5>
    <br/>
		<span className="txt-purewhite fontsize-head">{spacing[id].label1}</span>
		<input className="fontsize-slider-track" type="range" value={spacing[id].trackingSize} min={spacing[id].trackingMin} max={spacing[id].trackingMax} onChange={setTracking} data-id={id}/>
    <input className="fontsize-slider-input" type="number" value={spacing[id].trackingSize} min={spacing[id].trackingMin} max={spacing[id].trackingMax} onChange={setTracking} data-id={id}/>
    <br/>
    <span className="txt-purewhite fontsize-head">{spacing[id].label2}</span>
    <input className="fontsize-slider-track" type="range" value={spacing[id].leadingSize} min={spacing[id].leadingMin} max={spacing[id].leadingMax} onChange={setLeading} data-id={id}/>
    <input className="fontsize-slider-input" type="number" value={spacing[id].leadingSize} min={spacing[id].leadingMin} max={spacing[id].leadingMax} onChange={setLeading} data-id={id}/>
	</div>);
}

export { PairingDoc, ClickList, FontRange, Spacing };