//Hello!
//Suggested workfolw. Open a new terminal tab for node running react, sass compile and watch for style folder, and git for alpha folder. 

import React, {useState,useEffect} from 'react';
import './styles/App.css';
import './styles/style.min.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//Here goes the components that we're importing to the main app.
//The main components are the ones that will be displayed at all times. 
//Etc. the nav, the footer. The components that will be in the blocks that make up the pages can be imported directlly into the pages and then the pages into the main app.
import {HeaderNav} from "./components/nav";

//Here goes the pages that we're importing to the main app.
//The pages are the contet that will be exchanged in the app.
//You may locate these files via /src/pages/{the selected files}.
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
  let [title,setTitle] = useState("FontPairing");

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
      <HeaderNav title={title}>
        {/* <Link to="/">FontPairing</Link> */}
        <Link to="/learn">How to pair fonts</Link>
        <Link to="/about">About FontPairing</Link>
        <Link className="" to="pair-fonts">Get Started</Link>

      </HeaderNav>
      <main>
        <Switch>
          <Route exact path="/"><IntroPage/></Route>
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

const IntroPage = () => {
  return (<div className="bg-dark">
    <Link className="" to="pair-fonts">Start!</Link>
  </div>);
};

export default App;
