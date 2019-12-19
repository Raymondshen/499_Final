import React from 'react';

// CHANGE YOUR SRC LINK HERE.
import raymondIcon from '../assets/members/avatarsample.jpg';
import chunjiaIcon from '../assets/members/avatarsample.jpg';
import gustavIcon from '../assets/members/avatarsample.jpg';
import lovisaIcon from '../assets/members/avatarsample.jpg';
import dinoIcon from '../assets/members/avatarsample.jpg';


const AboutPage = () => {
	return (
		<section className="container max-xs-s p-xs-txl">
			<div className="about-container vh-100 flex-parent flex-col">
				<h1 id="about-title">About FontPairing</h1>
				<p>Well executed font pairing is important to achieve aesthetic finesse. Though it is difficult to imagine how fonts will look together along with various style attributes applied to them.
				This is why font pairing was created. It gives you the ability to easily play around with different options and pairings. [site name] displays your font and style selections in real time, by laying the the process and options next to the previewed result.
				[site name] is brought to you by a group of 5 passionate design students. We all have a passion for typography, design, and code.
				</p>
				<ul id="about-team-list" class="flex-parent flex-row">
				  <li><img className="about-profile"src={raymondIcon} alt="Raymond"></img></li>
				  <li><img className="about-profile"src={chunjiaIcon} alt="Chunjia"></img></li>
				  <li><img className="about-profile"src={gustavIcon} alt="Gustav"></img></li>
				  <li><img className="about-profile"src={lovisaIcon} alt="Lovisa"></img></li>
				  <li><img className="about-profile"src={dinoIcon} alt="Dino"></img></li>
				</ul>
				<div id="about-form" class="flex-parent flex-col">
					<h2>Contact Us</h2>
					<p>Appreaciate your feedbacks! let’s make it better for fun!</p>

					<div id="about-form-input" class="flex-parent flex-row">

						<div id="about-form-left">						
							<div id="about-form-name">
								<label>Name</label>
								<input type='text' placeholder="John Doe"></input>
							</div>
							<div id="about-form-email">
								<label>Email</label>
								<input type='text' placeholder="fontpairing123@example.com"></input>
							</div>
						</div>

						<div id="about-form-right">
							<textarea rows="5" cols="100"></textarea>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutPage;
