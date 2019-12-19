import React from 'react';

const LearnPage = () => {
	return (
		<section className=" bg-dark w-100 container p-xs-txl" id="preview">
			<div className="hero container max-xs-s">
				<h2 className="txt-purewhite">How to Pair Fonts?</h2>
				<p className="txt-purewhite">
					You may know what you are looking for or what you are doing,
					but here are some tips and good rules of thumb to take into consideration.
				</p>
				<ul className="txt-purewhite">
					<li className="p-xs-s">Make sure to have nice contrast</li>
					<li className="p-xs-s">Serif + San Serif looks nice together</li>
					<li className="p-xs-s">You can pair fonts of the same family using variation to the spacing and weight</li>
					<li className="p-xs-s">Create a visual hierarchy</li>
					<li className="p-xs-s">Avoid choosing similar fonts</li>
				</ul> 
				<p className="txt-purewhite">
					With that said, those are just a few ground rules to keep in mind while exploring <br/> 
					Have fun font experimenting!
				</p>
			</div>
			
			<div className="p-xs-txl container max-xs-s">
				<div>
					<h3 className="txt-purewhite">1 Choose Font</h3>
					<img src=""/>
				</div>
				<div>
					<h3 className="txt-purewhite">2 Set Font Size</h3>
					<img src=""/>

				</div>
				<div>
					<h3 className="txt-purewhite">3 Adjust the letter spacing and line height</h3>
					<img src=""/>

				</div>
				<div>
					<h3 className="txt-purewhite">4 Finish, download the pdf !</h3>
					<img src=""/>

				</div>
			</div>
		</section>
	);
}

export default LearnPage;
