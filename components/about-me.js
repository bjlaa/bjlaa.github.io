/*
	AboutMe Component: displaying contact infos, resume, bio ect...
	<AboutMe />
*/

import React from "react";
import Social from './social';


class AboutMe extends React.Component {
	render() {
		return (
			<div id='about' className="about-me">
			
				<div className='arrow-up' onClick={this.props.scrollToDiv.bind(this, '#frontpage')}>
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</div>

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
				<Social />
			</div>
		)
	}
}



export default AboutMe;