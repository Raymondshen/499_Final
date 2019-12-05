import React from 'react';

//Question for pairing dock. How does one change the unique h1 for the user and not the whole document.

//Components that's global


//Pairing doc, pass font style as a property as well
const PairingDoc = ({ fontSizes,fontFamilies }) => {
  return (<div>
    <section className="grid p-xs-m">
      <h1 style={{ fontSize:fontSizes[0].size+'px', fontFamily: fontFamilies.first.name }} className="col--12">An Adaptable Foundation</h1>
    </section>
    <section className="grid p-xs-m p-xs-hs">
      <div className="col--6">
        <h5 style={{ fontSize:fontSizes[4].size+'px', fontFamily: fontFamilies.first.name }}>Headline 5</h5>
        <p style={{ fontSize:fontSizes[5].size+'px', fontFamily: fontFamilies.second.name }}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half.</p>
      </div>
      <div className="col--6 offset--7 p-xs-hs">
        <h3 style={{ fontSize:fontSizes[2].size+'px', fontFamily: fontFamilies.first.name }}>Headline 3</h3>
        <h4 style={{ fontSize:fontSizes[3].size+'px', fontFamily: fontFamilies.first.name }}>Headline 4</h4>
        <p style={{ fontSize:fontSizes[5].size+'px', fontFamily: fontFamilies.second.name }}>
          By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was.
          </p>
      </div>
    </section>
    <section className="p-xs-hs">
      <TypeHierarchy
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
    <section id="selectfont" className="flex-xs-parent flex-xs-wrap">
      {data.map((o,i) => (
        <div className="font-card" key={i}>
          <div className="font-card-nav flex-xs-parent">
            <p className="txt-purewhite font-card-name" style={{fontFamily:o.name}}>{o.name}</p>
            <div className="font-card-btns-container flex-xs-parent">
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
const TypeHierarchy = ({ fontFamilies, fontSizes }) => {
  return (
    <section>
      <h1 className="userInputH1 m-xs-bs" style={{ fontFamily: fontFamilies.first.name, fontSize: fontSizes[0].size+'px' }}>H1 / {fontFamilies.first.name}</h1>
      <h2 className="userInputH2 m-xs-bs" style={{ fontFamily: fontFamilies.first.name, fontSize: fontSizes[1].size+'px' }}>H2 / {fontFamilies.first.name}</h2>
      <h3 className="userInputH3 m-xs-bs" style={{ fontFamily: fontFamilies.first.name, fontSize: fontSizes[2].size+'px' }}>H3 / {fontFamilies.first.name}</h3>
      <h4 className="userInputH4 m-xs-bs" style={{ fontFamily: fontFamilies.first.name, fontSize: fontSizes[3].size+'px' }}>H4 / {fontFamilies.first.name}</h4>
      <h5 className="userInputH5 m-xs-bs" style={{ fontFamily: fontFamilies.first.name, fontSize: fontSizes[4].size+'px' }}>H5 / {fontFamilies.first.name}</h5>
      <p className="userInputP m-xs-bs" style={{ fontFamily: fontFamilies.second.name, fontSize: fontSizes[5].size+'px' }}>p / {fontFamilies.second.name}</p>
    </section>
  );
}





const FontRange = ({id,size,setSize}) => {
	return (<div>
		<span>{size[id].name}</span>
		<input type="range" value={size[id].size} min="12" max="72" onChange={setSize} data-id={id}/>
		<input type="number" value={size[id].size} min="12" max="72" onChange={setSize} data-id={id}/>
	</div>);
}

export { PairingDoc, ClickList, FontRange };