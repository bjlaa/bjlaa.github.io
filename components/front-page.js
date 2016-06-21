/*
	Front Page Component
	<FrontPage />
*/

import React from 'react';
import Head from '../components/head.js';
import Menu from '../components/menu.js';
import ArrowDown from '../components/arrow-down';
import Hamburger from '../components/hamburger';

class FrontPage extends React.Component {


	render() {
		return (
			<div>
				<div id='frontpage' className="frontpage">
					<Hamburger />
					<Menu scrollToDiv={this.props.scrollToDiv}/>		
					<div className='arrow-down-fp'>
						<ArrowDown scrollToDiv={this.props.scrollToDiv.bind(this, '#work')}/>
					</div>	
				</div>	
				<Head />			
			</div>
		
		)
	}
}

export default FrontPage;

