import React, { useReducer, useState, useEffect } from 'react';

import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from 'react-router-dom';

import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";

//Haven't started styling the app. Just setting up the routing. Have applied some easy classes that I had in my library to make it easy to look at.
//https://mannenpag.github.io/sass-library/

import { fontFamiliesData, fontSizesData, spacingsData } from "../pairingdoc-data";
import { Spacing } from "../components/spacing";
import {PairingDoc} from "../components/pairing-doc";
import {ClickList} from "../components/click-list";
import {FontRange} from "../components/font-range";

const reduceProperty = (s, a) => {
	s[+a.i] = { ...s[+a.i], ...a.v };
	return [...s];
}
const reduceIndex = (s, a) => ({ ...s, ...a });


const FontStyleSheet = ({fonts}) => {
 return (
	 <style>
		 {/* Map trouch fonts, output the style @import */}
		 {fonts.reduce((r,o)=>r+o.import,"")}
	 </style>
 )
}

//Here is home content. 
const HomePage = ({ fonts }) => {
	let { path } = useRouteMatch();

	let [fontFamilies, setFontFamilies] = useReducer(
		reduceIndex,
		fontFamiliesData
	);
	let [fontSizes, setFontSizes] = useReducer(
		reduceProperty,
		fontSizesData
	);

	//Reducer for letter spacing and line height
	let [spacings,setSpacings] = useReducer(
		(s,a) => {
			s[+a.i]={...s[+a.i],...a.v};
			return [...s];
		},
		spacingsData
	);

	useEffect(() => {
		if (!fonts.length) return;
		let r1 = Math.floor(Math.random() * fonts.length);
		let r2 = Math.floor(Math.random() * fonts.filter((o, i) => i !== r1).length);
		console.log(r1, r2, fonts[r1], fonts[r2])
		setFontFamilies({ first: fonts[r1] })
		setFontFamilies({ second: fonts[r2] })
	}, [fonts]);

	//let [fontSize,setFontSize] = useState(14);

	return (
		<article className=" container">
			<FontStyleSheet fonts={fonts}/>
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
					<Route path={`${path}/set-sizes`}>
						<SetSize
							path={path}
							spacings={spacings}
							setFontSizes={setFontSizes}
							fontFamilies={fontFamilies}
							fontSizes={fontSizes}
						/>
					</Route>
					<Route path={`${path}/spacing`}>
						<SetSpacing
							path={path}

							spacings={spacings}
							setSpacings={setSpacings}
							fontFamilies={fontFamilies}
							fontSizes={fontSizes}
						/>
					</Route>
					<Route path={`${path}/download`}>
						<PrintPDF
							path={path}
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

const PairFont = ({ fontlist, path, setFontFamilies, fontFamilies, fontSizes, spacings }) => {
	// const changeFontOne = (e) => {
	// 	e.preventDefault();
	// 	setFontFamilies({ first: e.target.value });
	// }

	// const changeFontTwo = (e) => {
	// 	e.preventDefault();
	// 	setFontFamilies({ second: e.target.value });
	// }

	// const openMobile = () =>{
	// 	document.querySelector("#selection").classList.toggle("active");
	// };

	let [sideBarOpen, setSideBarOpen] = useState(false);

	return (
		<section className="grid">
    		<div class="closeBtn display-md-none" onClick={()=>setSideBarOpen(!sideBarOpen)}>x</div>
			<div className={`selection col-sm-12 col-md-5 position-xs-a position-md-r ${sideBarOpen?'active':''}`}>
				<div className="selection-nav-container pos-a flex-xs-parent flex-xs-align-center w-100 bg-dark-transparent">
					<div className="selection-nav-links"><Link to={`${path}/`}>Choose Font</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/set-sizes`}>Font Size</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/spacing`}>Spacing</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/download`}>Download PDF</Link></div>
				</div>
				<div id="selection-fontpair-interface" className="bg-dark">
					<ClickList
						data={fontlist}
						families={fontFamilies}
						callback={setFontFamilies}
					/>
				</div>
			</div>
			<div id="preview" className="preview col-xs-12 offset-xs-0 col-md-8 offset-md-6 pairing-wrapper">
				<PairingDoc
					fontSizes={fontSizes}
					fontFamilies={fontFamilies}
					spacings={spacings}
				/>
			</div>
		</section>
	);
}

const SetSize = ({ path, setFontSizes, fontSizes, fontFamilies, spacings }) => {

	const setSize = e => {
		e.preventDefault();
		setFontSizes({
			i: e.target.dataset.id,
			v: { size: e.target.value }
		});
	}

	// let r = Math.floor(Math.random() * fontSizes.length);

	return (
		<section className="grid">
			<div className="size-container selection col-md-5 position-xs-a position-md-r bg-dark-solid ">
				<div className="selection-nav-container pos-r flex-xs-parent flex-xs-align-center w-100 bg-dark-solid">
					<div className="selection-nav-links"><Link to={`${path}/`}	>Choose Font</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/set-sizes`}>Font Size</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/spacing`}>Spacing</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/download`}>Download PDF</Link></div>
				</div>
				<div className="fontsize-title">
					<p>Choose the font size</p>
				</div>
				{fontSizes.map((o, i) => (
					<FontRange
						key={i}
						id={i}
						size={fontSizes}
						setSize={setSize} />
				))}
			</div>
			<div id="preview" className="preview col-xs-12 offset-xs-0 col-md-8 offset-md-6 pairing-wrapper">
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

const SetSpacing = ({ path, setSpacings, spacings, fontSizes, fontFamilies }) => {

	const setTracking = e => {
		e.preventDefault();
		setSpacings({
			i: e.target.dataset.id,
			v: { trackingSize: e.target.value }
		});
	}

	const setLeading = e => {
		e.preventDefault();
		setSpacings({
			i: e.target.dataset.id,
			v: { leadingSize: e.target.value }
		});
	}

	return (
		<section className="grid">
			<div className="spacing-container selection col-xs-12 col-md-5 pos-r bg-dark-solid">
				<section className="selection-nav-container pos-a flex-xs-parent flex-xs-align-center w-100 bg-dark-transparent">
					<div className="selection-nav-links"><Link to={`${path}/`}	>Choose Font</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/set-sizes`}>Font Size</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/spacing`}>Spacing</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/download`}>Download PDF</Link></div>
				</section>
				<div id="selectspacing" className="vh-100">
					<div className="fontsize-title">
						<p>Choose the font size</p>
					</div>
					{spacings.map((o, i) => (
						<Spacing
							key={i}
							id={i}
							spacing={spacings}
							setTracking={setTracking}
							setLeading={setLeading}
						/>
					))}
				</div>
			</div>

			<div id="preview" className="preview col--8 offset--6 pairing-wrapper">
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

const PrintPDF = ({ path, spacings, fontSizes, fontFamilies }) => {

	const printDoc = e => {
		e.preventDefault();
		const string = renderToString(
			<PairingDoc
				fontFamilies={fontFamilies}
				fontSizes={fontSizes}
				spacings={spacings}
			/>
		);
		const pdf = new jsPDF("p", "mm", "a4");

		// doc.setFont('courier')
		// doc.setFontType('normal')
		// doc.text(20, 30, 'This is courier normal.')

		pdf.fromHTML(string);
		pdf.save("pdf");
	}

	return (
		<section className="grid">
			<div className="pdf-container selection col-xs-12 col-md-5 pos-r bg-dark-solid">
				<section className="selection-nav-container pos-a flex-xs-parent flex-xs-align-center w-100 bg-dark-transparent">
					<div className="selection-nav-links"><Link to={`${path}/`}	>Choose Font</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/set-sizes`}>Font Size</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/spacing`}>Spacing</Link></div>
					<div className="selection-nav-links"><Link to={`${path}/download`}>Download PDF</Link></div>
				</section>
				<div id="selectprint" class="flex-row h-100">
					<button className="print-button" onClick={printDoc}>Download PDF</button>
				</div>
			</div>
			<div id="preview" className="preview col--8 offset--6 pairing-wrapper">
				<PairingDoc
					fontFamilies={fontFamilies}
					fontSizes={fontSizes}
					spacings={spacings}
				/>
			</div>
		</section>
	);
}


export default HomePage;