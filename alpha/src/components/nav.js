import React from 'react';

const Nav = (props) => {
    return (
    <header className="nav flex-xs-parent p-xs-s">
    	<div>
    		<h5>{props.projectTitle}</h5>
    	</div>
    	<nav>
    		<ul className="flex-xs-parent flex-xs-justify-end">
                {props.children.map((o,i)=>(<li key={i}>{o}</li>))}
    		</ul>
    	</nav>
    </header>
    )
}

export default Nav;