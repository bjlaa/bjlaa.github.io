/*
	Work Component
	<Work />
*/

import React from "react";
import {data} from "../scripts/data-model";
import Project from './project';

class Work extends React.Component {
	testing() {
		console.log('works');
		console.log(this.refs.project);
		this.refs.project.refs.testing.style.display = 'block';
		this.refs.project.refs.testing.style.zIndex = 0;

		this.refs.list.refs.worklist.style.display = 'none';

	}
	render() {
		return (
			<div id='work' className="work">
				<div className='arrow-up' onClick={this.props.scrollToDiv.bind(this, '#frontpage')}>
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</div>
				<div className='title-section-work'>My Work</div>
				<Project ref='project' />
				<WorkList ref='list' data={data} testing={this.testing.bind(this)} />
				<div className='arrow-down' onClick={this.props.scrollToDiv.bind(this, '#skills')}>
					<i className="fa fa-angle-down" aria-hidden="true"></i>
				</div>
			</div>
		)

	}
}

class WorkList extends React.Component {

	render() {
		var testing = this.props.testing;
		var work = this.props.data.work.map(function(e) {
			return (
				<div onClick={testing} className="work-item" key={e.id} >
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