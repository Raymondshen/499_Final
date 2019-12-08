import React, { useReducer, useState, useEffect } from 'react';

import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from 'react-router-dom';
//Haven't started styling the app. Just setting up the routing. Have applied some easy classes that I had in my library to make it easy to look at.
//https://mannenpag.github.io/sass-library/

import { PairingDoc, ClickList, FontRange } from "./components";



//Here is home content. 
const HomePage = ({ fonts }) => {
	let { path } = useRouteMatch();

	let [fontFamilies, setFontFamilies] = useReducer(
		(s, a) => ({ ...s, ...a }),
		{ first: {}, second: {} }
	);
	let [fontSizes, setFontSizes] = useReducer(
		(s, a) => {
			s[+a.i] = { ...s[+a.i], ...a.v };
			return [...s];
		},
		[
			{ size: 72, min: 12, max: 96, name: 'H1' },
			{ size: 56, min: 12, max: 72, name: 'H2' },
			{ size: 43, min: 12, max: 72, name: 'H3' },
			{ size: 16, min: 12, max: 72, name: 'H4' },
			{ size: 14, min: 12, max: 72, name: 'H5' },
			{ size: 12, min: 12, max: 26, name: 'P' }
		]
	);

	useEffect(() => {
		if (!fonts.length) return;
		let r1 = Math.floor(Math.random() * fonts.length);
		let r2 = Math.floor(Math.random() * fonts.filter((o, i) => i != r1).length);
		console.log(r1, r2, fonts[r1], fonts[r2])
		setFontFamilies({ first: fonts[r1] })
		setFontFamilies({ second: fonts[r2] })
	}, [fonts]);

	//let [fontSize,setFontSize] = useState(14);

	return (
		<article className=" container">
			{/* <section className="grid">
				<h4 className="col--4">Welcome to our font pairing app</h4>
			</section>
			<section className="grid">
				<p className="col--4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</section> */}
			<section>
				<Switch>
					<Route exact path={`${path}`}>
						<PairFont
							path={path}

							fontlist={fonts}

							setFontFamilies={setFontFamilies}
							fontFamilies={fontFamilies}
							fontSizes={fontSizes}
						/>
					</Route>
					<Route path={`${path}/1`}>
						<SetSize
							path={path}

							setFontSizes={setFontSizes}
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
const PairFont = ({ fontlist, path, setFontFamilies, fontFamilies, fontSizes }) => {
	const changeFontOne = (e) => {
		e.preventDefault();
		setFontFamilies({ first: e.target.value });
	}

	const changeFontTwo = (e) => {
		e.preventDefault();
		setFontFamilies({ second: e.target.value });
	}



	return (
		<section className="grid">
			<div id="selection" className="col--5 pos-r">
				<div className="selection-nav-container pos-a flex-xs-parent flex-xs-align-center w-100 bg-dark-transparent">
					<div className="selection-nav-links"><Link to={`${path}/`}>Choose Font</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/1`}>Font Size</Link></div>
				</div>

				{/* <section className="grid">
					<input className="font-input m-xs-bm col--6" type="text" value={fontFamilies.first.name} onChange={changeFontOne} />
					<input className="font-input p-xs-s m-xs-bm offset--7 col--6" type="text" value={fontFamilies.second.name} onChange={changeFontTwo} />
				</section> */}
				<div id="selection-fontpair-interface" className="bg-dark">
					<ClickList
						data={fontlist}
						families={fontFamilies}
						callback={setFontFamilies}
					/>
				</div>
			</div>
			<div id="preview" className="preview col--8 offset--6 pairing-wrapper">
				<PairingDoc
					fontSizes={fontSizes}
					fontFamilies={fontFamilies}
				/>
			</div>
		</section>
	);
}

const SetSize = ({ path, setFontSizes, fontSizes, fontFamilies }) => {

	const setSize = e => {
		e.preventDefault();
		setFontSizes({
			i: e.target.dataset.id,
			v: { size: e.target.value }
		});
	}

	let r = Math.floor(Math.random() * fontSizes.length);

	return (
		<section className="grid">
			<div id="selection" className="col--5 pos-r bg-dark-solid">
				<div className="selection-nav-container pos-r flex-xs-parent flex-xs-align-center w-100 bg-dark-solid">
					<div className="selection-nav-links"><Link to={`${path}/`}>Choose Font</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/1`}>Font Size</Link></div>
				</div>
				<div className="fontsize-title">
					<p>Choose the font size</p>
				</div>
				{fontSizes.map((o, i) => (
					<FontRange
						key={i}
						id={i}
						size={fontSizes}
						min={fontSizes.min}
						max={fontSizes.max}
						setSize={setSize} />
				))}
			</div>
			<div id="preview" className=" preview col--8 offset--6 pairing-wrapper">
				<PairingDoc
					fontFamilies={fontFamilies}
					fontSizes={fontSizes}
				/>
			</div>
		</section>
	);
}


export default HomePage;