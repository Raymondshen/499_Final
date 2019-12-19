import React from 'react';

import raymondIcon from '../assets/members/raymond.jpg';
import chunjiaIcon from '../assets/members/chunjia.jpg';
import gustavIcon from '../assets/members/gustav.jpg';
import lovisaIcon from '../assets/members/lovisa.jpg';
import dinoIcon from '../assets/members/dino.jpg';


const AboutPage = () => {
	return (
		<section className="container max-xs-s p-xs-txl">
			<div className="about-container h-100 flex-parent flex-col">



				<h1 id="about-title" className="w-100">About FontPairing</h1>
				<p className="w-100">Well executed font pairing is important to achieve aesthetic finesse. Though it is difficult to imagine how fonts will look together along with various style attributes applied to them.
				This is why font pairing was created. It gives you the ability to easily play around with different options and pairings. FontPairing displays your font and style selections in real time, by laying the the process and options next to the previewed result.
				FontPairing is brought to you by a group of 5 passionate design students. We all have a passion for typography, design, and code.
				</p>




				<ul id="about-team-list" className="flex-parent w-100" style={{textAlign:'center'}}>
					<li>
						<div>
							<img className="about-profile" src={raymondIcon} alt="Raymond" />
						</div>
						<div>Raymond</div>
					</li>
					<li>
						<div>
							<img className="about-profile" src={chunjiaIcon} alt="Chunjia" />
						</div>
						<div>Chunjia</div>
					</li>
					<li>
						<div>
							<img className="about-profile" src={gustavIcon} alt="Gustav" />
						</div>
						<div>Gustav</div>
					</li>
					<li>
						<div>
							<img className="about-profile" src={lovisaIcon} alt="Lovisa" />
						</div>
						<div>Lovisa</div>
					</li>
					<li><div>
							</div><img className="about-profile" src={dinoIcon} alt="Dino" />
						<div>Dino</div>
					</li>
				</ul>





				<div id="about-form" class="flex-parent flex-col">
					<h2 id="about-contact">Contact Us</h2>
					<p>Appreaciate your feedbacks! let’s make it better for fun!</p>

					<div id="about-form-input" class="flex-parent flex-row">

						<div id="about-form-left">

							<div id="about-form-name">
								<label>Name</label>
								<input type='text' placeholder="John Doe"></input>
							</div>

							<br></br>

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
