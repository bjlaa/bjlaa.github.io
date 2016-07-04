import React, { Component } from 'react';

class Project extends Component {
	render() {
		return (
			<div ref='projectBackground' className='project-background'>
				<div ref='projectContainer'  className='project-container'>
					<div className='title-project'>{this.props.title}</div>
					
					<div className='closing-details' onClick={this.props.hideProjectDetails.bind(this, this.props.id)}>
						x
					</div>
					<img className='project-img' src={this.props.img} alt='An image illustrating the project.'/>
					<div className='project-description' > A description of the project (coming soon)</div>
					<div className='project-page' >
						<p>You can see a demo of the project </p>
						<a className='link-page' href={this.props.page} target='_blank'> here</a>.
					</div>
					<div className='project-url' >
						<p>Or you see the repository on </p>
						<a className='link-url' href={this.props.URL} target='_blank'> Github</a>.
					</div>

				</div>
			</div>	
		)
	}
}
export default Project;