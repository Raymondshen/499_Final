import React from 'react';

const LearnPage = () => {
	return (
		<section className="container max-xs-s p-xs-txl">
			<div className="hero">
				<h3>How to Pair Fonts?</h3>
				<p>
					You may know what you are looking for or what you are doing,  but here are some tips and good rules of thumb to take into consideration.
				</p>
				<ul>
					<li>Make sure to have nice contrast</li>
					<li>Serif + San Serif looks nice together</li>
					<li>You can pair fonts of the same family using variation to the spacing and weight</li>
					<li>Create a visual hierarchy</li>
					<li>Avoid choosing similar fonts</li>
				</ul> 
				<p>
					With that said, those are just a few ground rules to keep in mind while exploring <br/> 
					Have fun font experimenting!
				</p>
			</div>
			
			<div className="container">
				<div>
					<p>1</p>
					<h2>Choose Font</h2>
					<p>Choose your favorite fonts from our selection</p>
				</div>
				<div>
					<p>
						Roboto
						<br/>
						12 styles
					</p>
					<p>A,a</p>
				</div>
				<div>
					<p>2</p>
					<h2>Set Font Size</h2>
				</div>
				<div>
					<div>
						<p>H1</p>
						<img src="" />
					</div>
					<div>
						<p>H2</p>
						<img src="" />
					</div>
				</div>
				<div>
					<p>3</p>
					<h2>Adjust the letter spacing and line height</h2>
					<p>Test for your preferred spacing</p>
					<img src="" />
				</div>
				<div>
					<p>4</p>
					<h2>Finish, download the pdf</h2>
					<img src="" />
				</div>
			</div>
		</section>
	);
}

export default LearnPage;
