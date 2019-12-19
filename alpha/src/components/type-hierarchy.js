import React from 'react';

const TypeHierarchy = ({ fontFamilies, fontSizes, spacings }) => {
    return (
      <section className="p-xs-vxl">
        <h1 className="" style={{ letterSpacing: spacings[0].trackingSize + 'px', lineHeight: spacings[0].leadingSize + '%', fontFamily: fontFamilies.first.name, fontSize: fontSizes[0].size + 'px' }}>H1 / {fontFamilies.first.name}</h1>
        <div className="slider-info m-xs-bl">{fontSizes[0].size} / Letter Spacing {spacings[0].trackingSize} px / Line Height {spacings[0].leadingSize} % </div>
  
        <h2 className="" style={{ letterSpacing: spacings[1].trackingSize + 'px', lineHeight: spacings[1].leadingSize + '%', fontFamily: fontFamilies.first.name, fontSize: fontSizes[1].size + 'px' }}>H2 / {fontFamilies.first.name}</h2>
        <div className="slider-info m-xs-bl">{fontSizes[1].size} / Letter Spacing {spacings[1].trackingSize} px / Line Height {spacings[1].leadingSize} % </div>
  
        <h3 className="" style={{ letterSpacing: spacings[2].trackingSize + 'px', lineHeight: spacings[2].leadingSize + '%', fontFamily: fontFamilies.first.name, fontSize: fontSizes[2].size + 'px' }}>H3 / {fontFamilies.first.name}</h3>
        <div className="slider-info m-xs-bl">{fontSizes[2].size} / Letter Spacing {spacings[2].trackingSize} px / Line Height {spacings[2].leadingSize} % </div>
  
        <h4 className="" style={{ letterSpacing: spacings[3].trackingSize + 'px', lineHeight: spacings[3].leadingSize + '%', fontFamily: fontFamilies.first.name, fontSize: fontSizes[3].size + 'px' }}>H4 / {fontFamilies.first.name}</h4>
        <div className="slider-info m-xs-bl">{fontSizes[3].size} / Letter Spacing  {spacings[3].trackingSize} px / Line Height {spacings[3].leadingSize} % </div>
  
        <h5 className="" style={{ letterSpacing: spacings[4].trackingSize + 'px', lineHeight: spacings[4].leadingSize + '%', fontFamily: fontFamilies.first.name, fontSize: fontSizes[4].size + 'px' }}>H5 / {fontFamilies.first.name}</h5>
        <div className="slider-info m-xs-bl">{fontSizes[4].size} / Letter Spacing {spacings[4].trackingSize} px / Line Height {spacings[4].leadingSize} % </div>
  
        <p className="" style={{ letterSpacing: spacings[5].trackingSize + 'px', lineHeight: spacings[5].leadingSize + '%', fontFamily: fontFamilies.second.name, fontSize: fontSizes[5].size + 'px' }}>p / {fontFamilies.second.name}</p>
        <div className="slider-info m-xs-bl">{fontSizes[5].size} / Letter Spacing {spacings[5].trackingSize} px / Line Height {spacings[5].leadingSize} % </div>
      </section>
    );
  }

  export { TypeHierarchy };