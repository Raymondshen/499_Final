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
import PairPage from "./pages/fontPairing";
import AboutPage from "./pages/about";

function App() {
  let [title,setTitle] = useState("Pairing fonts");

  return (
    <Router>
      <HeaderNav title={title}>
        <Link to="/">Home</Link>
        <Link to="/pairfonts">How to pairfonts</Link>
        <Link to="/about">About project</Link>
      </HeaderNav>
      <main>
        <Switch>
          <Route exact path="/"><IntroPage/></Route>
          <Route path="/choose" component={HomePage}/>
          <Route path="/pairfonts" component={PairPage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </main>
    </Router>
  );
}

const IntroPage = () => {
  return (<div>
    <Link className="" to="choose">Start!</Link>
  </div>);
};

export default App;
