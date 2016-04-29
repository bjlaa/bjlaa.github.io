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

class FrontPage extends React.Component {
	scrollToDiv(target) {
		console.log(target);
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
					<Menu scrollToDiv={this.scrollToDiv.bind(this)}/>
					<div className='arrow-down' onClick={this.scrollToDiv.bind(this, '#work')}>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</div>
				</div>
				<Head />
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

