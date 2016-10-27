import React from 'react';
import ReactDOM from 'react-dom';

/*
	Components Imports
*/
import FrontPage from '../components/front-page.js';
import Work from '../components/work.js';
import Skills from '../components/skills.js';
import AboutMe from '../components/about-me.js';


class App extends React.Component {

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
				<FrontPage scrollToDiv={this.scrollToDiv.bind(this)} />
				<Work scrollToDiv={this.scrollToDiv.bind(this)}/>
				<Skills scrollToDiv={this.scrollToDiv.bind(this)}/>
				<AboutMe scrollToDiv={this.scrollToDiv.bind(this)}/>				
			</div>
		)
	}
}





/*
	Renders to the DOM element with the id 'main'
*/

var main= document.querySelector('#main');
ReactDOM.render(<App />, main);


