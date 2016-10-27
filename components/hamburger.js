import React, { Component } from 'react';

class Hamburger extends Component {
	openMenu() {
		$('i.fa.fa-bars').toggleClass('disappear');
		$('i.fa.fa-times').toggleClass('appear');
		$('.menu-container').toggleClass('showMenu');
	}
	closeMenu() {
		$('i.fa.fa-bars').toggleClass('disappear');
		$('i.fa.fa-times').toggleClass('appear');
		$('.menu-container').toggleClass('showMenu');
	}

	render() {
		return (
			<div className='hamburger'>
				<i onClick={this.openMenu} className="fa fa-bars" aria-hidden="true"></i>
				<i onClick={this.closeMenu}className="fa fa-times" aria-hidden="true"></i>
			</div>
		)
	}
}

export default Hamburger;