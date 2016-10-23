/*
	AboutMe Component: displaying contact infos, resume, bio ect...
	<AboutMe />
*/

import React from "react";
import Contact from '../components/contact.js';


class AboutMe extends React.Component {
	render() {
		return (
			<div id='about' className="about-me">
				<div className='about-me-title'>About Me</div>
				<div className="presentation">
					<img className="img-about" src="../css/avatar.jpg" alt="An image of my face"/>
					<p>
						Hi, my name is Benjamin. I am a Front-End Developer/Ninja. 
						I started developing my first websites 2 years ago. Since then I have 
						trained myself with online courses in order to master the newest 
						technologies available. Check out my online resume! (Coming soon)
					</p> 
					<p>
						Thank you for visiting my portfolio. This website is fully 
						built with React and Javascript ES6.
					</p>
				</div>
			</div>
		)
	}
}



export default AboutMe;