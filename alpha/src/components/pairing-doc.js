import React from 'react';
import {TypeHierarchy} from '../pages/home/components';

//Pairing doc, pass font style as a property as well
const PairingDoc = ({ fontSizes,fontFamilies,spacings,className }) => {

    //console.log(spacings.size[1]);
  
    const hasValidData = fontSizes instanceof Array && fontSizes.length && fontFamilies instanceof Object && spacings instanceof Array && spacings.length;
  
    return hasValidData ? (
      <div className={className ? className : ''}>
        <section className="grid p-xs-m">
          <h1 style={{ letterSpacing:spacings[0].trackingSize+'px', lineHeight:spacings[0].leadingSize+'%', fontSize:fontSizes[0].size+'px', fontFamily: fontFamilies.first.name }} className="col--12">An Adaptable Foundation</h1>
        </section>
        <section className="grid p-xs-m p-xs-hs">
          <div className="col-xs-12 col-lg-6 p-lg-rl">
            <h2 style={{letterSpacing:spacings[4].trackingSize+'px', lineHeight:spacings[4].leadingSize+'%', fontSize:fontSizes[1].size+'px', fontFamily: fontFamilies.first.name }}>Headline&nbsp;2</h2>
            <p style={{ letterSpacing:spacings[5].trackingSize+'px', lineHeight:spacings[5].leadingSize+'%', fontSize:fontSizes[5].size+'px', fontFamily: fontFamilies.second.name }}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half.</p>
          </div>
          <div className="col-lg-6 col-xs-12 offset-lg-7 p-lg-ll m-xs-tl m-lg-tn">
            <h3 style={{letterSpacing:spacings[2].trackingSize+'px', lineHeight:spacings[2].leadingSize+'%', fontSize:fontSizes[2].size+'px', fontFamily: fontFamilies.first.name }}>Headline&nbsp;3</h3>
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
    ) : "";
  }

  export { PairingDoc };