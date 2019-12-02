import React from 'react';

//Question for pairing dock. How does one change the unique h1 for the user and not the whole document.

//Components that's global
const PairingDoc = ({fontStyle, fontName}) => {
    return ( <>
      <section className="grid p-xs-m">
        <div className="userInputH1 col--12">An Adaptable Foundation</div>
      </section>
      <section className="grid p-xs-m p-xs-hs">
        <div className="col--6">
          <div className="userInputH5">Headline 5</div>
          <div className="userInputP">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half.</div>
        </div>
        <div className="col--6 offset--7 p-xs-hs">
        <div className="userInputH3">Headline 3</div>
        <div className="userInputH4">Headline 4</div>
          <div className="userInputP">
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was.
          </div>
        </div>
      </section>
      <section className="p-xs-hs">
        <TypeHierchy style={fontStyle} text={fontName}/>
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
          <p className="btn" onClick={()=>callback({first:o})}>{o}</p>
          <h4>Aa</h4>
        </div>
      )).reduce((r,o)=>[r," ",o])}
    </section>
  );
}

//Components that's local
const TypeHierchy = ({fontStyle, text}) => {
  return (
    <section>
      <div className="userInputH1 m-xs-bs" style={{fontFamily:fontStyle}}>H1 / {text}</div>
      <div className="userInputH2 m-xs-bs" style={{fontFamily:fontStyle}}>H2 / {text}</div>
      <div className="userInputH3 m-xs-bs" style={{fontFamily:fontStyle}}>H3 / {text}</div>
      <div className="userInputH4 m-xs-bs" style={{fontFamily:fontStyle}}>H4 / {text}</div>
      <div className="userInputH5 m-xs-bs" style={{fontFamily:fontStyle}}>H5 / {text}</div>
      <div className="userInputP m-xs-bs" style={{fontFamily:fontStyle}}>p / {text}</div>
    </section>
  );
}

const Slider = () => {
  return (
    <section>
    </section>
  );
}

const FontCard = () => {
  return (
    <section>
      <h4>
        Aa
      </h4>
    </section>
  );
}

export {PairingDoc, ClickList, Slider, FontCard};