import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg'; 


import {Link} from 'react-router-dom';

const HeaderNav = ({title}) => {
	let [sideBarOpen, setSideBarOpen] = useState(true);

    return (
	<>
		<div className="nav-icon display-md-n position-xs-a" onClick={()=>setSideBarOpen(!sideBarOpen)}>
			x
		</div>
		<header className="nav flex-xs-parent flex-md-horizontal flex-xs-vertical">
			<div className="p-xs-s p-md-n content-contain-header">
				<img src={Logo} alt="logo" style={{width: '2em'}}/>
				<h1 style={{fontSize:'1.2em', fontWeight:'bold'}}>{title}</h1>
			</div>
			<nav className={`p-xs-s p-md-n nav flex-xs-parent flex-md-horizontal flex-xs-vertical ${sideBarOpen?'active':''}`}>
			<ul className="flex-xs-parent flex-xs-vertical flex-md-horizontal flex-xs-justify-end p-xs-bl p-md-bn">
				<li className="p-xs-tm p-md-tn">
					<Link to="/" onClick={()=>setSideBarOpen(!sideBarOpen)}>Home</Link>
				</li>
				<li className="p-xs-tm p-md-tn">
					<Link to="/learn" onClick={()=>setSideBarOpen(!sideBarOpen)}>How to pair fonts</Link>
				</li>
				<li className="p-xs-tm p-md-tn">
					<Link to="/about" onClick={()=>setSideBarOpen(!sideBarOpen)}>About FontPairing</Link>
				</li>
				<li className="p-xs-tm p-md-tn">
					<Link className="btn btn--primary" to="pair-fonts" onClick={()=>setSideBarOpen(!sideBarOpen)}>Get Started</Link>
				</li>
			</ul>
			</nav>	
		</header>
	</>
	);
}

export {HeaderNav};