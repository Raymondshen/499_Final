import React, {useReducer} from 'react';

import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from 'react-router-dom';
//Haven't started styling the app. Just setting up the routing. Have applied some easy classes that I had in my library to make it easy to look at.
//https://mannenpag.github.io/sass-library/

//Here is home content. 
const HomePage = () => {
	let {path} = useRouteMatch();

	// A reducer is a handy way of creating app data that is subscribed but somewhat custom
	// These will reset if you ever navigate away from the Learn pages
	let [fonts,setFont] = useReducer(
		(s,a) => ({...s,...a}),
		{first:'Arial',second:'serif'}
	);

	return(
		<section className="container max-xs-s">
			<div className="container">
				<h4>Welcome to our font pairing app</h4>
				<p>This is our app for pairing fonts.</p>
				<p className="max-xs-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div className="container">
				<Switch>
					<Route exact path={path}>
						<PairFont path={path}/>
					</Route>
				</Switch>
			</div>
		</section>
		);
}

//Here is the start pairing content.
//If this is the flow we want to go for. The flow is accesable from the home screen. 
const PairFont = (props) => {
	return (
		<section>
			<div>
				<h3>Here is info about the pairing process</h3>
				<p className="max-xs-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>


			<div>
				<div className="">
					<div className=""/>
					<Link className="" to={`${props.path}/1`}>Start!</Link>
				</div>
			</div>
		</section>
	);
}

export default HomePage;