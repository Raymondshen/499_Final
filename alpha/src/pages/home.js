import React, { useReducer, useState, useEffect } from 'react';

import {
	Switch,
	Route,
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
import {PairNav} from "../components/pair-nav";

import gearIcon from '../assets/images/icon_settings.svg'; 

const reduceProperty = (s, a) => {
	s[+a.i] = { ...s[+a.i], ...a.v };
	return [...s];
}
const reduceIndex = (s, a) => ({ ...s, ...a });


const FontStyleSheet = ({fonts}) => {
 return (
	 <style>
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
		// console.log(r1, r2, fonts[r1], fonts[r2])
		setFontFamilies({ first: fonts[r1] })
		setFontFamilies({ second: fonts[r2] })
	}, [fonts]);

	//let [fontSize,setFontSize] = useState(14);
	let [sideBarOpen, setSideBarOpen] = useState(true);

	return (
		<article className="container">
			<FontStyleSheet fonts={fonts}/>
			<section className="grid">
				<div className="closeBtn position-xs-f display-md-n" onClick={()=>setSideBarOpen(!sideBarOpen)}>
					<img src={gearIcon} alt=""></img>
				</div>
				<div className={`selection col-sm-12 col-md-5 position-xs-a position-md-r ${sideBarOpen?'active':''}`}>
					<PairNav path={path}/>
					<div id="selection-fontpair-interface" className="bg-dark">
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
		</article>
	);
}

//Here is the start pairing content.
//If this is the flow we want to go for. The flow is accesable from the home screen. 

const PairFont = ({ fontlist, setFontFamilies, fontFamilies }) => {
	return (
			<div id="selection-fontpair-interface" className="bg-dark">
				<ClickList
					data={fontlist}
					families={fontFamilies}
					callback={setFontFamilies}
				/>
			</div>
	);
}

const SetSize = ({ setFontSizes, fontSizes }) => {

	const setSize = e => {
		e.preventDefault();
		setFontSizes({
			i: e.target.dataset.id,
			v: { size: e.target.value }
		});
	}

	return (
			<div id="selectspacing" className="p-xs-bxl">
				<div className="fontsize-title p-xs-txl p-xs-bs">
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
	);
}

const SetSpacing = ({ setSpacings, spacings }) => {

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
			<div id="selectspacing" className="vh-100 p-xs-bxl">
				<div className="fontsize-title p-xs-txl">
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
	);
}

const PrintPDF = ({ spacings, fontSizes, fontFamilies }) => {

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

		pdf.fromHTML(string);
		pdf.save("pdf");
	}

	return (
		<section className="pdf-container">
			<div id="selectprint" className="flex-row h-100">
				<button className="print-button" onClick={printDoc}>Download PDF</button>
			</div>
		</section>
	);
}


export default HomePage;