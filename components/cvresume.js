import React from 'react';

class CVResume extends React.Component {
	render() {
		return (
			<div className id='cvresume'>
				<div className='arrow-up' onClick={this.props.scrollToDiv.bind(this, '#skills')}>
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</div>
				<div className='cvresume-title'>My C.V. / Resume</div>
				<a className='cvresume-link'>Click here to see my Interactive Resume</a>
				<div className='arrow-down' onClick={this.props.scrollToDiv.bind(this, '#about')}>
					<i className="fa fa-angle-down" aria-hidden="true"></i>
				</div>
			</div>
		)
	}
}

export default CVResume;