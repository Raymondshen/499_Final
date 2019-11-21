import React from 'react';
import logo from './assets/images/logo.svg';
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
import Nav from "./components/nav";

//Here goes the pages that we're importing to the main app.
//The pages are the contet that will be exchanged in the app.
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <main>
        <Nav>

        </Nav>
      </main>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    
    </Router>
  );
}

export default App;
