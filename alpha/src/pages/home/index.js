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

	let [fonts,setFont] = useReducer(
		(s,a) => ({...s,...a}),
		{first:'Arial', second:'serif'}
	);

	let [num,setNum] = useState(14);

	return(
		<article className=" container p-xs-ts">
			<section className="grid">
				<h4 className="col--4">Welcome to our font pairing app</h4>
			</section>
			<section className="grid">
				<p className="col--4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</section>
			<section>
				<Switch>
					<Route exact path={`${path}`}>
						<PairFont 
							path={path}
							fonts={fonts}
							num={num}
							setFont={setFont}
						/>
					</Route>
					<Route path={`${path}/1`}>
						<SetSize 
							path={path}
							fonts={fonts}
							num={num}
							setNum={setNum}
						/>
					</Route>
				</Switch>
			</section>
		</article>
		);
}

//Here is the start pairing content.
//If this is the flow we want to go for. The flow is accesable from the home screen. 

const PairFont = ({path,fonts,setFont}) => {
	//Here insert jason file with all of our fonts.
	let fontlist = ['Arial', 'Arial Black', 'Tahoma', 'Verdana', 'Sans-Serif', 'Times New Roman', 'Cambria', 'Georgia', 'Serif'];

	const changeFontOne = (e) => {
		e.preventDefault();
		setFont({first:e.target.value});
	}

	const changeFontTwo = (e) => {
		e.preventDefault();
		setFont({second:e.target.value});
	}
	return (
		<section className="grid">
			<div className="bg-dark col--6">
				<div className="p-xs-bs"><Link to={`${path}/1`}>Next</Link></div>
				<section className="grid">
					<input className="font-input m-xs-bm col--6" type="text" value={fonts.first} onChange={changeFontOne} />
					<input className="font-input p-xs-s m-xs-bm offset--7 col--6" type="text" value={fonts.second} onChange={changeFontTwo} />
				</section>
				<ClickList 
					data={fontlist} 
					callback={setFont}
					/>
			</div>
			<div className="col--6 offset--7 pairing-wrapper">
				<PairingDoc 
					fontSize={72} 
					fontStyleTwo={fonts.second} 
					fontStyleOne={fonts.first} 
					fontNameOne={fonts.first}
					fontNameTwo={fonts.second}
					/>
			</div>
		</section>
	);
}

const SetSize = ({path,fonts,num,setNum}) => {

	const doNum = e => {
		e.preventDefault();
		setNum(e.target.value)
	}

	return (
		<section className="grid">
			<div className="col--6">
				<div className="p-xs-bs"><Link to={`${path}/2`}>Next</Link></div>
				<input type="range" value={num} min="12" max="72" id="font-size" onChange={doNum}/>
			</div>
			<div className="col--6 offset--7 pairing-wrapper">
				<PairingDoc 
					fontSize={num} 
					fontStyleTwo={fonts.second} 
					fontStyleOne={fonts.first} 
					fontNameOne={fonts.first}
					fontNameTwo={fonts.second}
					/>
			</div>
		</section>
	);
}


export default HomePage;