import React from 'react';
import {TypeHierarchy} from './type-hierarchy';

//Pairing doc, pass font style as a property as well
const PairingDoc = ({ fontSizes,fontFamilies,spacings,className }) => {

    //console.log(spacings.size[1]);
  
    const hasValidData = fontSizes instanceof Array && fontSizes.length && fontFamilies instanceof Object && spacings instanceof Array && spacings.length;
  
    return hasValidData ? (
      <div className={className ? className : 'p-xs-tm p-md-tn'}>
        <section className="grid p-xs-m p-xs-hs">
        <h1 style={{ letterSpacing: spacings[0].trackingSize + 'px', lineHeight: spacings[0].leadingSize + '%', fontSize: fontSizes[0].size + 'px', fontFamily: fontFamilies.first.name }} className="col--12">Pippi Moves into Villa Villekulla</h1>
        </section>
        <section className="grid p-xs-m p-xs-hs">
        <div className="col-xs-12 col-lg-6 p-lg-rl">
            <h2 style={{ letterSpacing: spacings[1].trackingSize + 'px', lineHeight: spacings[1].leadingSize + '%', fontSize: fontSizes[1].size + 'px', fontFamily: fontFamilies.first.name }}>The Cannibal King</h2>
            <p style={{ letterSpacing: spacings[5].trackingSize + 'px', lineHeight: spacings[5].leadingSize + '%', fontSize: fontSizes[5].size + 'px', fontFamily: fontFamilies.second.name }}>Pippi had not forgotten her father. He was a sea captain who sailed on the great ocean, and Pippi had sailed with him in his ship until one day her father was blown overboard in a storm and disappeared. But Pippi was absolutely certain that he would come back. She would never believe that he had drowned; she was sure he had floated until he landed on an island inhabited by cannibals. And she thought he had become the king of all the cannibals and went around with a golden crown on his head all day long. </p>
        </div>
        <div className="col-lg-6 col-xs-12 offset-lg-7 p-lg-ll m-xs-tl m-lg-tn">
            <h3 style={{ letterSpacing: spacings[2].trackingSize + 'px', lineHeight: spacings[2].leadingSize + '%', fontSize: fontSizes[2].size + 'px', fontFamily: fontFamilies.first.name }}>A remarkable child</h3>
            <h4 style={{ letterSpacing: spacings[3].trackingSize + 'px', lineHeight: spacings[3].leadingSize + '%', fontSize: fontSizes[3].size + 'px', fontFamily: fontFamilies.first.name }}>"It's that awful Bengt. He's always in a fight,"</h4>
            <p style={{ letterSpacing: spacings[5].trackingSize + 'px', lineHeight: spacings[5].leadingSize + '%', fontSize: fontSizes[5].size + 'px', fontFamily: fontFamilies.second.name }}>
            "My papa is a cannibal king; it certainly isn't every child who has such a stylish papa," Pippi used to say with satisfaction. "And as soon as my papa has built himself a boat he will come and get me, and I'll be a cannibal princess. Heighho, won't that be exciting!"
            </p>
            <p style={{ letterSpacing: spacings[5].trackingSize + 'px', lineHeight: spacings[5].leadingSize + '%', fontSize: fontSizes[5].size + 'px', fontFamily: fontFamilies.second.name }}>— Excerpt from "Pippi Longstocking" by Astrid Lindgren, 1945</p>
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