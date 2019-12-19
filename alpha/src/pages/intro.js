import React, { useReducer, useEffect } from 'react';
import {PairingDoc} from "../components/pairing-doc";
import { fontFamiliesData, fontSizesData, spacingsData } from "../pairingdoc-data";
import LogoOutline from "../assets/images/logo_outline.svg";

import {Link} from 'react-router-dom';

const IntroPage = (fonts) => {
    const reduceIndex = (s, a) => ({ ...s, ...a });
    
    let [fontFamilies, setFontFamilies] = useReducer(
          reduceIndex,
          fontFamiliesData
    );
  	console.log(fonts);

    useEffect(() => {
      if (!fonts.fonts.length) return;
        let f = fonts.fonts;
          let r1 = Math.floor(Math.random() * f.length);
          let r2 = Math.floor(Math.random() * f.filter((o, i) => i !== r1).length);
          console.log(r1, r2, f[r1], f[r2])
          setFontFamilies({ first: f[r1] })
          setFontFamilies({ second: f[r2] })
    }, [fonts]);
    


    return (<div className="bg-dark">
      <section className="landingpage grid">
        <div className="container max-xs-s p-xs-txl col-md-6 col-xs-10">
          <h1 className="txt-purewhite">Experiment with font pairing and styling options while seeing the results live</h1>
          <section className="grid">
            <p className="txt-purewhite col-md-6 col-xs-10 offset-xs-0 offset-md-6">Choose a body and header font to pair, and then customize each with styling options. Once you are complete with the process you will have the option to download a personal style-guide.</p>
            <Link className="btn btn--secondary col-xs-10 offset-xs-0 offset-md-6" to="pair-fonts">Get Started</Link>
          </section>
          <section>
          <img className="logo-outline" src={LogoOutline} />
          </section>
        </div>
        <div className="container max-xs-s p-xs-txl col--6 display-xs-n display-md-b">
          <PairingDoc 
                      fontSizes={fontSizesData} 
                      fontFamilies={fontFamilies}
                      spacings={spacingsData}
                      className='landingpage__pairingdoc'
                      />
        </div>
      </section>
  
    </div>);
  };

  export default IntroPage;
