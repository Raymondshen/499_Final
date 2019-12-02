import React from 'react';

const HeaderNav = (props) => {
    return (
		<header className="nav flex-xs-parent p-xs-s">
			<div>
				<h5>{props.title}</h5>
			</div>
			<Nav>{props.children}</Nav>
		</header>
    );
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