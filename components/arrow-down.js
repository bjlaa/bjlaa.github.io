import React, { Component } from 'react';

class ArrowDown extends Component {
	render() {
		return (
			<div className='arrow-down' >
				<i onClick={this.props.scrollToDiv} className="fa fa-angle-down" aria-hidden="true"></i>
			</div>			
		)
	}
}

export default ArrowDown;