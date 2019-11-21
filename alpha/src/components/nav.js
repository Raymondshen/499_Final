import React from 'react';

const Nav = (props) => {
    return (
    <header className="nav">
    	<div>
    		<p>{props.projectTitle}</p>
    	</div>
    	<nav>
    		<ul>
                {props.children.map((o,i)=>(<li key={i}>{o}</li>))}
    		</ul>
    	</nav>
    </header>
    )
}

export default Nav;