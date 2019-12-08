import React, {useReducer,useState,useEffect} from 'react';

import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from 'react-router-dom';
//Haven't started styling the app. Just setting up the routing. Have applied some easy classes that I had in my library to make it easy to look at.
//https://mannenpag.github.io/sass-library/

import {PairingDoc,ClickList,FontRange, Spacing} from "./components";



//Here is home content. 
const HomePage = ({fonts}) => {
	let {path} = useRouteMatch();

	let [fontFamilies,setFontFamilies] = useReducer(
		(s,a) => ({...s,...a}),
		{first:{}, second:{}}
	);
	let [fontSizes,setFontSizes] = useReducer(
		(s,a) => {
			s[+a.i]={...s[+a.i],...a.v};
			return [...s];
		},
		[
			{size:72,min:12,max:96,name:'H1'},
			{size:56,min:12,max:72,name:'H2'},
			{size:43,min:12,max:72,name:'H3'},
			{size:16,min:12,max:72,name:'H4'},
			{size:14,min:12,max:72,name:'H5'},
			{size:12,min:12,max:26,name:'P'}
		]
	);

	//Reducer for letter spacing and line height
	let [spacings,setSpacings] = useReducer(
		(s,a) => {
			s[+a.i]={...s[+a.i],...a.v};
			return [...s];
		},
		[
			{
				trackingSize:0,
				trackingMin:-5,
				trackingMax:15,
				leadingSize:100,
				leadingMin:80,
				leadingMax:150,
				name:'H1',
				label1:"Tracking",
				label2:"Leading"
			},
			{
				trackingSize:0,
				trackingMin:-3,
				trackingMax:8,
				leadingSize:100,
				leadingMin:80,
				leadingMax:125,
				name:'H2',
				label1:"Tracking",
				label2:"Leading"
			},
			{
				trackingSize:0,
				trackingMin:-3,
				trackingMax:8,
				leadingSize:100,
				leadingMin:80,
				leadingMax:125,
				name:'H3',
				label1:"Tracking",
				label2:"Leading"
			},
			{
				trackingSize:0,
				trackingMin:-3,
				trackingMax:8,
				leadingSize:100,
				leadingMin:80,
				leadingMax:125,
				name:'H4',
				label1:"Tracking",
				label2:"Leading"
			},
			{
				trackingSize:0,
				trackingMin:-3,
				trackingMax:8,
				leadingSize:100,
				leadingMin:80,
				leadingMax:125,
				name:'H5',
				label1:"Tracking",
				label2:"Leading"
			},
			{
				trackingSize:0,
				trackingMin:-2,
				trackingMax:4,
				leadingSize:100,
				leadingMin:80,
				leadingMax:125,
				name:'P',
				label1:"Tracking",
				label2:"Leading"
			},
		]
	);

	useEffect(()=>{
		if(!fonts.length) return;
		let r1 = Math.floor(Math.random() * fonts.length);
		let r2 = Math.floor(Math.random() * fonts.filter((o,i)=>i!=r1).length);
		console.log(r1,r2,fonts[r1],fonts[r2])
		setFontFamilies({first:fonts[r1]})
		setFontFamilies({second:fonts[r2]})
	},[fonts]);

	//let [fontSize,setFontSize] = useState(14);

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
							spacings={spacings}

							fontlist={fonts}
							setFontFamilies={setFontFamilies}

							fontFamilies={fontFamilies}
							fontSizes={fontSizes}
						/>
					</Route>
					<Route path={`${path}/1`}>
						<SetSize 
							path={path}
							spacings={spacings}
							setFontSizes={setFontSizes}
							fontFamilies={fontFamilies}
							fontSizes={fontSizes}
						/>
					</Route>
					<Route path={`${path}/2`}>
						<SetSpacing 
							path={path}

							spacings={spacings}
							setSpacings={setSpacings}
							spacings={spacings}
							fontFamilies={fontFamilies}
							fontSizes={fontSizes}
						/>
					</Route>
				</Switch>
			</section>
		</article>
		);
}

//Here is the start pairing content.
//If this is the flow we want to go for. The flow is accesable from the home screen. 

const PairFont = ({fontlist,path,setFontFamilies,fontFamilies,fontSizes,spacings}) => {
	const changeFontOne = (e) => {
		e.preventDefault();
		setFontFamilies({first:e.target.value});
	}

	const changeFontTwo = (e) => {
		e.preventDefault();
		setFontFamilies({second:e.target.value});
	}

	return (
		<section className="grid">
			<div className="col--4">
				<div className="p-xs-bs"><Link to={`${path}/1`}>Next</Link></div>
				{/* <section className="grid">
					<input className="font-input m-xs-bm col--6" type="text" value={fontFamilies.first.name} onChange={changeFontOne} />
					<input className="font-input p-xs-s m-xs-bm offset--7 col--6" type="text" value={fontFamilies.second.name} onChange={changeFontTwo} />
				</section> */}
				<div className="bg-dark">
				<ClickList 
					data={fontlist} 
					families={fontFamilies}
					callback={setFontFamilies}
					/>
				</div>
			</div>
			<div className="col--8 offset--6 pairing-wrapper">
				<PairingDoc 
					fontSizes={fontSizes} 
					fontFamilies={fontFamilies}
					spacings={spacings}
					/>
			</div>
		</section>
	);
}

const SetSize = ({path,setFontSizes,fontSizes,fontFamilies,spacings}) => {

	const setSize = e => {
		e.preventDefault();
		setFontSizes({
			i:e.target.dataset.id,
			v:{size:e.target.value}
		});
	}

	let r = Math.floor(Math.random() * fontSizes.length);

	return (
		<section className="grid">
			<div className="col--4">
				<div className="p-xs-bs"><Link to={`${path}/2`}>Next</Link></div>
				<div className="p-xs-bs"><Link to={`${path}/`}>Previous</Link></div>
				{ fontSizes.map((o,i)=>(
					<FontRange
						key={i}
						id={i}
						size={fontSizes}
						setSize={setSize} />
				))}
			</div>
			<div className="col--8 offset--6 pairing-wrapper">
				<PairingDoc 
					fontFamilies={fontFamilies}
					fontSizes={fontSizes}
					spacings={spacings}
					/>
			</div>
		</section>
	);
}

//Sudo component for tracking and leading


const SetSpacing = ({path,setSpacings,spacings,fontSizes,fontFamilies}) => {

	const setTracking = e => {
		e.preventDefault();
		setSpacings({
			i:e.target.dataset.id,
			v:{trackingSize:e.target.value}
		});
	}

	const setLeading = e => {
		e.preventDefault();
		setSpacings({
			i:e.target.dataset.id,
			v:{leadingSize:e.target.value}
		});
	}

	return (
		<section className="grid">
		<div className="col--4">
			<section className="grid">
				<div className="p-xs-bs"><Link to={`${path}/3`}>Next</Link></div>
				<div className="p-xs-bs"><Link to={`${path}/1`}>Previous</Link></div>
			</section>
			{ spacings.map((o,i)=>(
				<Spacing
				key={i}
				id={i}
				spacing={spacings}
				setTracking={setTracking}
				setLeading={setLeading}
				 />
			))}
		</div>

		<div className="col--8 offset--6 pairing-wrapper">
			<PairingDoc 
				fontFamilies={fontFamilies}
				fontSizes={fontSizes}
				spacings={spacings}
				//Inset property into the pairing doc. for the spacing
				/>
		</div>
		</section>
	);
}


export default HomePage;