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

import gearIcon from '../assets/images/icon_settings.svg'; 
import chooseIcon from '../assets/images/icon_choose_font.svg'; 
import sizeIcon from '../assets/images/icon_font_size.svg'; 
import spacingIcon from '../assets/images/icon_spacing.svg'; 
import downloadIcon from '../assets/images/icon_download.svg'; 


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
	let [sideBarOpen, setSideBarOpen] = useState(false);

	return (
		<section className="grid">
			<div className="closeBtn display-md-n" onClick={()=>setSideBarOpen(!sideBarOpen)}>
				<img src={gearIcon} alt=""></img>
			</div>
				<div className={`selection col-sm-12 col-md-5 position-xs-a position-md-r ${sideBarOpen?'active':''}`}>
				<div className="selection-nav-container position-xs-a flex-xs-parent flex-xs-align-center w-100 bg-dark-transparent">
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/`}>
							<img src={chooseIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>Choose</span>
						</Link>	
					</div>
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/set-sizes`}>
							<img src={sizeIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>Font Size</span>
						</Link>
					</div>
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/spacing`}>
							<img src={spacingIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>Spacing</span>
						</Link>
					</div>
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/download`}>
							<img src={downloadIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>PDF</span>
						</Link>
					</div>
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
	let [sideBarOpen, setSideBarOpen] = useState(false);

	return (
		<section className="grid">
			<div className="closeBtn display-md-n" onClick={()=>setSideBarOpen(!sideBarOpen)}>
				<img src={gearIcon} alt=""></img>
			</div>
			<div className={`size-container selection col-sm-12 col-md-5 position-xs-a position-md-r bg-dark-solid ${sideBarOpen?'active':''}`}>
			<div className="selection-nav-container position-xs-a flex-xs-parent flex-xs-align-center w-100 bg-dark-transparent">
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/`}>
							<img src={chooseIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>Choose</span>
						</Link>	
					</div>
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/set-sizes`}>
							<img src={sizeIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>Font Size</span>
						</Link>
					</div>
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/spacing`}>
							<img src={spacingIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>Spacing</span>
						</Link>
					</div>
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/download`}>
							<img src={downloadIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>PDF</span>
						</Link>
					</div>
				</div>
				<div className="p-xs-bxl">
					<div className="fontsize-title p-xs-txl">
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

	let [sideBarOpen, setSideBarOpen] = useState(false);

	return (
		<section className="grid">
			<div className="closeBtn display-md-n" onClick={()=>setSideBarOpen(!sideBarOpen)}>
				<img src={gearIcon} alt=""></img>
			</div>
			<div className={`spacing-container selection col-sm-12 col-md-5 position-xs-a position-md-r bg-dark-solid ${sideBarOpen?'active':''}`}>
				<div className="selection-nav-container position-xs-a flex-xs-parent flex-xs-align-center w-100 bg-dark-transparent">
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/`}>
							<img src={chooseIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>Choose</span>
						</Link>	
					</div>
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/set-sizes`}>
							<img src={sizeIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>Font Size</span>
						</Link>
					</div>
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/spacing`}>
							<img src={spacingIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>Spacing</span>
						</Link>
					</div>
					<div className="selection-nav-links">
						<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/download`}>
							<img src={downloadIcon} alt="Choose font" className="pairing-nav-icon"></img>
							<span>PDF</span>
						</Link>
					</div>
				</div>
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

		// pdf.setFont(fontFamilies.first.name)
		// pdf.setFontSize(30)
		// pdf.text(20, 30, fontFamilies.first.name)
		// console.log(fontSizes[0].size);
		pdf.fromHTML(string);
		pdf.save("pdf");
	}

	let [sideBarOpen, setSideBarOpen] = useState(false);

	return (
		<section className="grid">
			<div className="closeBtn display-md-n" onClick={()=>setSideBarOpen(!sideBarOpen)}>
				<img src={gearIcon} alt=""></img>
			</div>
			<div className={`pdf-container  selection col-sm-12 col-md-5 position-xs-a position-md-r bg-dark-solid ${sideBarOpen?'active':''}`}>
				<div className="selection-nav-container position-xs-a flex-xs-parent flex-xs-align-center w-100 bg-dark-transparent">
						<div className="selection-nav-links">
							<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/`}>
								<img src={chooseIcon} alt="Choose font" className="pairing-nav-icon"></img>
								<span>Choose</span>
							</Link>	
						</div>
						<div className="selection-nav-links">
							<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/set-sizes`}>
								<img src={sizeIcon} alt="Choose font" className="pairing-nav-icon"></img>
								<span>Font Size</span>
							</Link>
						</div>
						<div className="selection-nav-links">
							<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/spacing`}>
								<img src={spacingIcon} alt="Choose font" className="pairing-nav-icon"></img>
								<span>Spacing</span>
							</Link>
						</div>
						<div className="selection-nav-links">
							<Link className="flex-xs-parent flex-xs-vertical hover-underline" to={`${path}/download`}>
								<img src={downloadIcon} alt="Choose font" className="pairing-nav-icon"></img>
								<span>PDF</span>
							</Link>
						</div>
					</div>
				<div id="selectprint" className="flex-row h-100">
					<button className="print-button" onClick={printDoc}>Download PDF</button>
				</div>
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


export default HomePage;