/*
	Front Page Component
	<FrontPage />
*/

import React from 'react';
import Head from '../components/head.js';
import Menu from '../components/menu.js';
import Work from '../components/work.js';
import Skills from '../components/skills.js';
import CVResume from '../components/cvresume.js';
import AboutMe from '../components/about-me.js';
import Contact from '../components/contact.js';
import ArrowDown from '../components/arrow-down';
import Hamburger from '../components/hamburger';

class FrontPage extends React.Component {
	scrollToDiv(target) {
		var $target = $(target);
		var $root = $('html,body');
		if($target.length) {
			$root.animate({
				scrollTop: $target.offset().top
			}, 'slow');			
		}
	}

	render() {
		return (
			<div>
				<div id='frontpage' className="frontpage">
					<Hamburger />
					<Menu scrollToDiv={this.scrollToDiv.bind(this)}/>
					<Head />		
					<ArrowDown scrollToDiv={this.scrollToDiv.bind(this, '#work')}/>
				</div>
				<Work scrollToDiv={this.scrollToDiv.bind(this)}/>
				<Skills scrollToDiv={this.scrollToDiv.bind(this)}/>
				<CVResume scrollToDiv={this.scrollToDiv.bind(this)}/>
				<AboutMe scrollToDiv={this.scrollToDiv.bind(this)}/>
				<Contact scrollToDiv={this.scrollToDiv.bind(this)}/>
				
			</div>
		)
	}
}

export default FrontPage;

