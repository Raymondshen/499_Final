import React, {useState,useEffect,useReducer} from 'react';
import './styles/App.css';
import './styles/style.min.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {HeaderNav} from "./components/nav";

import HomePage from "./pages/home";
import LearnPage from "./pages/learn";
import IntroPage from "./pages/intro";
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

export default App;
