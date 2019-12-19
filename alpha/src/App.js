import React, {useState,useEffect,useReducer} from 'react';
import './styles/App.css';
import './styles/style.min.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {HeaderNav} from "./components/nav";
import {PairingDoc} from "./components/pairing-doc";
import { fontFamiliesData, fontSizesData, spacingsData } from "./pairingdoc-data";
import HomePage from "./pages/home";
import LearnPage from "./pages/learn";
import AboutPage from "./pages/about";

const getKeys = row => Object.keys(row).filter(key => /^gsx\$/.test(key));
const parseRow = row => {
  return getKeys(row).reduce((obj, key) => {
    obj[key.slice(4)] = row[key].$t;
    return obj;
  }, {});
};

function App() {
  let [fonts,setFonts] = useState([]);

	useEffect(()=>{
		fetch(`https://spreadsheets.google.com/feeds/list/1dR_EZsCGs9CbicR9pdI0UbVC5fXWlRjZLgdNTsRDwM4/1/public/values?alt=json`)
		.then(r => r.json())
		.then(d=>{
      setFonts(d.feed.entry.map(parseRow))
		})
  },[]);
  
  return (
    <Router style={{overflow: 'auto'}}>
      <HeaderNav title={"fontPairing"}/>
      <main>
        <Switch>
          <Route exact path="/">
            <IntroPage fonts={fonts}/>
          </Route>
          <Route path="/pair-fonts">
            <HomePage fonts={fonts} />
          </Route>
          <Route path="/learn" component={LearnPage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </main>
    </Router>
  );
}

const IntroPage = (fonts) => {
  const reduceIndex = (s, a) => ({ ...s, ...a });
  
  let [fontFamilies, setFontFamilies] = useReducer(
		reduceIndex,
		fontFamiliesData
  );

  useEffect(() => {
		if (!fonts.length) return;
		let r1 = Math.floor(Math.random() * fonts.length);
		let r2 = Math.floor(Math.random() * fonts.filter((o, i) => i !== r1).length);
		console.log(r1, r2, fonts[r1], fonts[r2])
		setFontFamilies({ first: fonts[r1] })
		setFontFamilies({ second: fonts[r2] })
  }, [fonts]);
  
  console.log(fontFamiliesData);

  return (<div className="bg-dark">
    <section className="landingpage grid">
      <div className="container max-xs-s p-xs-txl col--6">
        <h1 className="txt-purewhite">Experiment with font pairing and styling options while seeing the results live</h1>
        <p className="txt-purewhite">Choose a body and header font to pair, and then customize each with styling options. Once you are complete with the process you will have the option to download a personal style-guide.</p>
        <Link className="btn btn--secondary" to="pair-fonts">Get Started</Link>
      </div>
      <div className="container max-xs-s p-xs-txl col--6">
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

export default App;
