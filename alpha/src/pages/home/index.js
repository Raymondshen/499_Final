import React, {useReducer,useState,useEffect} from 'react';

import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from 'react-router-dom';

//Here is home content. 
const HomePage = () => {
	let {path} = useRouteMatch();

	let [font1,setFont1] = useState('Arial');
	let [font2,setFont2] = useState('Times New Roman');
	let [num,setNum] = useState(0);

	return(
		<section className="container max-xs-s p-xs-txl">
			<div className="container">
				<h4>Welcome to our font pairing app</h4>
				<p>This is our app for pairing fonts.</p>
				<p className="max-xs-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div className="container">
				<Switch>
					<Route exact path={`${path}`}>
						<PairFont path={path}/>
					</Route>
					<Route exact path={`${path}/1`}>
						<PairFont1
							path={path}
							font1={font1}
							setFont1={setFont1}
							/>
					</Route>
					<Route path={`${path}/2`}>
						<PairFont2
							path={path}
							font2={font2}
							setFont2={setFont2}
							/>
					</Route>
					<Route path={`${path}/3`}>
						<PairFont3
							path={path}
							font2={font2}
							font1={font1}
							num={num}
							setNum={setNum}
							/>
					</Route>
				</Switch>
			</div>
		</section>
		);
}

//Here is the start pairing content.
//If this is the flow we want to go for. The flow is accesable from the home screen. 
const PairFont = (props) => {
	console.log(props)
	return (
		<section>
			<div>
				<h3>Here is info about the pairing process</h3>
				<p className="max-xs-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>


			<div>
				<Link className="" to={`${props.path}/1`}>Start!</Link>
			</div>
		</section>
	);
}


const PairFont1 = ({path,font1,setFont1}) => {
	const updateFont = (e) => {
		e.preventDefault();
		setFont1(e.target.value);
	}
	return (
		<section>
			<div>
				<h3>Here is info about the pairing process</h3>
				<p className="max-xs-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>

			{font1}
			<input value={font1} onChange={updateFont} />
			<div>
				<Link to={`${path}/2`}>Next</Link>
			</div>
		</section>
	);
}


const PairFont2 = ({path,font2,setFont2}) => {
	return (
		<section>
			{font2}
			<div style="padding-top: 400px;" ><Link to={`${path}/3`}>Next</Link></div>
		</section>
	);
}

const PairFont3 = (props) => {
	const doNum = e => {
		e.preventDefault();
		props.setNum(e.target.value)
	}
	return (
		<section>
			<div>{props.font1}</div>
			<div>{props.font2}</div>
			<div>
				<div>{props.num}</div>
				<input type="range" value={props.num} min="0" max="20" onChange={doNum} />
			</div>
		</section>
	);
}

export default HomePage;