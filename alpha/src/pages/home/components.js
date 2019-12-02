import React from 'react';

//Question for pairing dock. How does one change the unique h1 for the user and not the whole document.

//Components that's global
const PairingDoc = (props) => {
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
        <TypeHierchy fontSize={"H1"}/>
        <TypeHierchy fontSize={"H2"}/>
        <TypeHierchy fontSize={"H3"}/>
        <TypeHierchy fontSize={"H4"}/>
        <TypeHierchy fontSize={"H5"}/>
      </section>
    </>
    );
}

//Kick list from Hamilton
const ClickList = ({data,callback}) => {
  return (<p style={{lineHeight: 2.4}}>
      {data.map(o=>(
          <span className="btn" onClick={()=>callback({first:o})}>{o}</span>
      )).reduce((r,o)=>[r," ",o])}
  </p>);
}

//Components that's local
const TypeHierchy = ({fontSize}) => {
  return (
    <section>
      <div>{fontSize}</div>
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
    </section>
  );
}

export {PairingDoc, ClickList, Slider, FontCard};