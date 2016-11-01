import React, { Component } from 'react';

class Project extends Component {
	constructor(props) {
		super(props);
		this.renderGHPage = this.renderGHPage.bind(this);
	}
	renderGHPage() {
		if(this.props.page !== '') {
			return (
				<div className='project-page' >
					<p>Check out the demo for the project&nbsp;
						<a className='link-page' href={this.props.page} target='_blank'>&#32;here</a>.
					</p> 
				</div>
			);
		}
		return;
	}

	render() {
		return (
			<div ref='projectBackground' className='project-background'>
				<div ref='projectContainer'  className='project-container'>
					<div className='title-project'>{this.props.title}</div>
					
					<div className='closing-details' onClick={this.props.hideProjectDetails.bind(this, this.props.id)}>
						x
					</div>
					<div className="project-details">
						<div className='project-description' >{this.props.description}</div>
						<div className="project-tech">
							<div>Technologies used:</div>
							<div>{this.props.tech}</div>
						</div>
					</div>
					<div className="project-img">
						<img src={this.props.img} alt='An image illustrating the project.'/>
					</div>
					

					<div className='project-url'>
						<p>You can see the repository on&nbsp;
							<a className='link-url' href={this.props.URL} target='_blank'> Github</a>.
						</p>
					</div>
					{this.renderGHPage()}
				</div>
			</div>	
		)
	}
}
export default Project;