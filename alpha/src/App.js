//Hello!
//Suggested workfolw. Open a new terminal tab for node running react, sass compile and watch for style folder, and git for alpha folder. 

import React from 'react';
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
import HomePage from "./pages/home";
import Learn from "./pages/learn";
import AboutPage from "./pages/about";

function App() {
  return (
    <Router >
      <HeaderNav title="Pairing fonts">
          <Link to="/">Home</Link>
          <Link to="/pairfonts">How to pairfonts</Link>
          <Link to="/about">About project</Link>
      </HeaderNav>
      <main>
        <Switch>
          <Route exact path="/" component={IntroPage}/>
          <Route exact path="/choose" component={HomePage}/>
          <Route path="/pairfonts" component={Learn}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </main>
    </Router>
  );
}

const IntroPage = () => {
  return(
    <div>
      <Link className="" to="choose">Start!</Link>
    </div>
  );
}

export default App;
