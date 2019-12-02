import React from 'react';

const HeaderNav = ({title,children}) => {
    return (
    <header className="nav flex-xs-parent p-xs-s">
    	<div>
    		<h1 style={{fontSize:'1em'}}>{title}</h1>
    	</div>
		<Nav>{children||[]}</Nav>
    </header>
    )
}

const Nav = ({children}) => {
	return (
	<nav>
		<ul className="flex-xs-parent flex-xs-justify-end">
			{children.map((o,i)=>(<li key={i}>{o}</li>))}
		</ul>
	</nav>
	);
}

export {HeaderNav, Nav};