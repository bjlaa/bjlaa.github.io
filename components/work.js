/*
	Work Component
	<Work />
*/

import React from "react";
import {data} from "../scripts/data-model";
import Project from './project';

class Work extends React.Component {
	showProjectDetails(id) {
		this.refs.projectList.refs[id].refs.projectBackground.style.display = 'block';
		this.refs.projectList.refs[id].refs.projectBackground.style.zIndex = 0;	
		this.refs.projectList.refs.divProjects.style.height = '100vh';
		this.refs.projectList.refs.divProjects.style.width = '100%';
		this.props.scrollToDiv.bind(this, '#project-list');	

		this.refs.list.refs.worklist.style.display = 'none';

	}
	hideProjectDetails(id) {
		this.refs.projectList.refs[id].refs.projectBackground.style.display = 'none';		
		this.refs.list.refs.worklist.style.display = 'block';
		this.refs.projectList.refs.divProjects.style.height = '0';
		this.refs.projectList.refs.divProjects.style.width = '0';
		this.props.scrollToDiv.bind(this, '#work-list');
	}
	render() {
		return (
			<div id='work' className="work">
				<div className='arrow-up' onClick={this.props.scrollToDiv.bind(this, '#frontpage')}>
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</div>


				<div className='title-section-work'>My Work</div>
				
				<ProjectList hideProjectDetails={this.hideProjectDetails.bind(this)} id='project-list' ref='projectList' data={data} />
				
				<WorkList id='work-list' ref='list' data={data} showProjectDetails={this.showProjectDetails.bind(this)} />
				

				<div className='arrow-down' onClick={this.props.scrollToDiv.bind(this, '#skills')}>
					<i className="fa fa-angle-down" aria-hidden="true"></i>
				</div>
			</div>
		)

	}
}

class ProjectList extends React.Component {
	render() {
		var hideProjectDetails = this.props.hideProjectDetails;
		var projects = this.props.data.work.map(function(e) {
			return (
				<Project hideProjectDetails={hideProjectDetails} ref={e.id} key={e.id} title={e.title} img={e.imageURL}
								page={e.page} URL={e.URL} id={e.id}
				 />
			)
		})

		return (
			<div ref='divProjects' className='div-projects'>
				{ projects }
			</div>
		)
	}
}

class WorkList extends React.Component {

	render() {
		var showProjectDetails = this.props.showProjectDetails;
		var work = this.props.data.work.map(function(e) {
			return (
				<div onClick={showProjectDetails.bind(this, e.id)} className="work-item" key={e.id} >
					<img className="work-img" src={e.imageURL} alt=""/>
					<p>{e.title}</p>
				</div>
			)
		});
		return (
			<div ref='worklist' className="work-list">
				{work}
			</div>
		)
	}
}

export default Work;