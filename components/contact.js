/*
	Contact component
*/
import React from 'react';
import Social from '../components/social.js';
import Footer from '../components/footer.js';

class Contact extends React.Component{
	constructor(props) {
		super(props);

		this.state= {
			contactTitle : "Contact Me",
			disabled: false
		};
	}
	render() {
		return (
			<div id='contact'>
				<div className='arrow-up' onClick={this.props.scrollToDiv.bind(this, '#about')}>
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</div>
				<div className='contact-section-title'>Contact</div>
				<Social />
				<div 
				onClick={this.props.scrollToDiv.bind(this, '#frontpage')} 
				className='back-top'
				>Back to Top</div>
				<Footer/>
			</div>

		)
	}
}

export default Contact;