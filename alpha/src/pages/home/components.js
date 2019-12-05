import React from 'react';

//Question for pairing dock. How does one change the unique h1 for the user and not the whole document.

//Components that's global


//Pairing doc, pass font style as a property as well
const PairingDoc = ({fontStyle, fontSize, fontName}) => {
    return ( <>
      <section className="grid p-xs-m">
        <h1 style={{fontFamily:fontStyle}} className="col--12">An Adaptable Foundation</h1>
      </section>
      <section className="grid p-xs-m p-xs-hs">
        <div className="col--6">
          <h5 style={{fontFamily:fontStyle}}>Headline 5</h5>
          <p style={{fontFamily:fontStyle}}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half.</p>
        </div>
        <div className="col--6 offset--7 p-xs-hs">
        <h3 style={{fontFamily:fontStyle}}>Headline 3</h3>
        <h4 style={{fontFamily:fontStyle}}>Headline 4</h4>
          <p style={{fontFamily:fontStyle}}>
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was.
          </p>
        </div>
      </section>
      <section className="p-xs-hs">
        <TypeHierchy 
          fontStyle={fontStyle} 
          fontSize={fontSize} 
          text={fontName}
          />
      </section>
    </>
    );
}

//Click list from Hamilton
const ClickList = ({data,callback}) => {
  return (
    <section class="flex-xs-parent flex-xs-wrap">
      {data.map(o=>(
        <div className="font-card">
          <p className="btn">{o}</p>
          <h4>Aa</h4>
          <div className="button" onClick={()=>callback({first:o})}>Select as font1</div>
          <div className="button" onClick={()=>callback({second:o})}>Select as font2</div>
        </div>
      )).reduce((r,o)=>[r," ",o])}
    </section>
  );
}

//Components that's local
const TypeHierchy = ({fontStyle, fontSize, text}) => {
  return (
    <section>
      <h1 className="userInputH1 m-xs-bs" style={{fontFamily:fontStyle, fontSize:fontSize}}>H1 / {text}</h1>
      <h2 className="userInputH2 m-xs-bs" style={{fontFamily:fontStyle}}>H2 / {text}</h2>
      <h3 className="userInputH3 m-xs-bs" style={{fontFamily:fontStyle}}>H3 / {text}</h3>
      <h4 className="userInputH4 m-xs-bs" style={{fontFamily:fontStyle}}>H4 / {text}</h4>
      <h5 className="userInputH5 m-xs-bs" style={{fontFamily:fontStyle}}>H5 / {text}</h5>
      <p className="userInputP m-xs-bs" style={{fontFamily:fontStyle}}>p / {text}</p>
    </section>
  );
}

export {PairingDoc, ClickList};