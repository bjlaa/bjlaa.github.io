/*
	Menu Component
*/
import React from 'react';

class Menu extends React.Component {
	render() {
		return (
			<div className="menu-container">
				<div className="menu-items">
					<a className='menu-link' onClick={this.props.scrollToDiv.bind(this, '#work')}>
						<div className="workLink">Work</div>
					</a>
					<a className='menu-link' onClick={this.props.scrollToDiv.bind(this, '#skills')}>
						<div className="skillsLink">Skills</div> 
					</a>
					<a className='menu-link' onClick={this.props.scrollToDiv.bind(this, '#about')}>
						<div className="aboutLink">About Me</div>
					</a>
					<a className='menu-link' onClick={this.props.scrollToDiv.bind(this, '#contact')}>
						<div className="contactLink">Contact</div> 
					</a>						
				</div>
			</div>
		)
	}
}

export default Menu;