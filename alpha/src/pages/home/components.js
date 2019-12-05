import React from 'react';

//Question for pairing dock. How does one change the unique h1 for the user and not the whole document.

//Components that's global


//Pairing doc, pass font style as a property as well
const PairingDoc = ({ fontStyleOne, fontStyleTwo, fontSize, fontNameOne, fontNameTwo }) => {
  return (<>
    <section className="grid p-xs-m">
      <h1 style={{ fontFamily: fontStyleOne }} className="col--12">An Adaptable Foundation</h1>
    </section>
    <section className="grid p-xs-m p-xs-hs">
      <div className="col--6">
        <h5 style={{ fontFamily: fontStyleOne }}>Headline 5</h5>
        <p style={{ fontFamily: fontStyleTwo }}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half.</p>
      </div>
      <div className="col--6 offset--7 p-xs-hs">
        <h3 style={{ fontFamily: fontStyleOne }}>Headline 3</h3>
        <h4 style={{ fontFamily: fontStyleOne }}>Headline 4</h4>
        <p style={{ fontFamily: fontStyleTwo }}>
          By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was.
          </p>
      </div>
    </section>
    <section className="p-xs-hs">
      <TypeHierchy
        fontStyleOne={fontStyleOne}
        fontStyleTwo={fontStyleTwo}
        fontSize={fontSize}
        fontNameOne={fontNameOne}
        fontNameTwo={fontNameTwo}
      />
    </section>
  </>
  );
}

//Click list from Hamilton
const ClickList = ({ data, callback }) => {
  return (
    <section id="selectfont" class="flex-xs-parent flex-xs-wrap">
      {data.map(o => (
        <div className="font-card">
          <div className="font-card-nav flex-xs-parent">
            <p className="txt-purewhite font-card-name">{o}</p>
            <div className="font-card-btns-container flex-xs-parent">
              <div className="font-card-btns flex-xs-parent" onClick={() => callback({ first: o })}>H</div>
              <div className="font-card-btns flex-xs-parent" onClick={() => callback({ second: o })}>B</div>
            </div>
          </div>
          <h4 class="txt-purewhite font-card-dummy">Aa</h4>
        </div>
      )).reduce((r, o) => [r, " ", o])}
    </section>
  );
}

//Components that's local
const TypeHierchy = ({ fontStyleOne, fontStyleTwo, fontSize, fontNameOne, fontNameTwo }) => {
  return (
    <section>
      <h1 className="userInputH1 m-xs-bs" style={{ fontFamily: fontStyleOne, fontSize: fontSize }}>H1 / {fontNameOne}</h1>
      <h2 className="userInputH2 m-xs-bs" style={{ fontFamily: fontStyleOne }}>H2 / {fontNameOne}</h2>
      <h3 className="userInputH3 m-xs-bs" style={{ fontFamily: fontStyleOne }}>H3 / {fontNameOne}</h3>
      <h4 className="userInputH4 m-xs-bs" style={{ fontFamily: fontStyleOne }}>H4 / {fontNameOne}</h4>
      <h5 className="userInputH5 m-xs-bs" style={{ fontFamily: fontStyleOne }}>H5 / {fontNameOne}</h5>
      <p className="userInputP m-xs-bs" style={{ fontFamily: fontStyleTwo }}>p / {fontNameTwo}</p>
    </section>
  );
}

export { PairingDoc, ClickList };