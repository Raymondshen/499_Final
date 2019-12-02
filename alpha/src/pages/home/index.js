import React, {useReducer,useState,useEffect} from 'react';

import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from 'react-router-dom';
//Haven't started styling the app. Just setting up the routing. Have applied some easy classes that I had in my library to make it easy to look at.
//https://mannenpag.github.io/sass-library/

import {PairingDoc} from "./components";
import {ClickList} from "./components";

//Here is home content. 
const HomePage = () => {
	let {path} = useRouteMatch();

	// A reducer is a handy way of creating app data that is subscribed but somewhat custom
	// These will reset if you ever navigate away from the Learn pages
	// let [fonts,setFont] = useReducer(
	// 	(s,a) => ({...s,...a}),
	// 	{first:'Arial',second:'serif'}
	// );

	let [num,setNum] = useState(0);

	let fontlist = ['Arial', 'Arial Black', 'Tahoma', 'Verdana', 'sans-serif'];

	return(
		<article className="container max-xs-s p-xs-ts">
			<section className="grid">
				<h4 className="col--4">Welcome to our font pairing app</h4>
			</section>
			<section className="grid">
				<p className="col--4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</section>
			<section className="grid">
				<div className="col--6 pairing-wrapper">
					<Switch>
						<Route exact path={`${path}`}>
							<PairFont path={path}/>
						</Route>
						<Route path={`${path}/1`}>
							<PairFont1
								path={path}
								/>
						</Route>
						<Route path={`${path}/2`}>
							<PairFont2
								path={path}
								/>
						</Route>
					</Switch>
				</div>
				<div className="col--6 offset--7 pairing-wrapper">
					<PairingDoc/>
				</div>
			</section>
		</article>
		);
}

//Here is the start pairing content.
//If this is the flow we want to go for. The flow is accesable from the home screen. 

const PairFont = ({path,fontlist}) => {
	return (
		<section>
			<ClickList data={fontlist}/>
			<div><Link to={`${path}/1`}>Next</Link></div>
		</section>
	);
}

const PairFont1 = ({path,font2}) => {
	return (
		<section>
			<div><Link to={`${path}/2`}>Next</Link></div>
		</section>
	);
}

const PairFont2 = (props) => {
	const doNum = e => {
		e.preventDefault();
		props.setNum(e.target.value)
	}
	return (
		<section>
			<div>{props.font1}</div>
			<div>{props.font2}</div>
			<div>
				<div>{props.num}</div>
				<input type="range" value={props.num} min="0" max="20" onChange={doNum} />
			</div>
		</section>
	);
}

export default HomePage;