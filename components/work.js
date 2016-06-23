/*
	Work Component
	<Work />
*/

import React from "react";
import {data} from "../scripts/data-model";

class Work extends React.Component {
	render() {
		return (
			<div id='work' className="work">
				<div className='arrow-up' onClick={this.props.scrollToDiv.bind(this, '#frontpage')}>
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</div>
				<div className='title-section-work'>My Work</div>
				<WorkList data={data} />
				<div className='arrow-down' onClick={this.props.scrollToDiv.bind(this, '#skills')}>
					<i className="fa fa-angle-down" aria-hidden="true"></i>
				</div>
			</div>
		)

	}
}

class WorkList extends React.Component {
	render() {
		var work = this.props.data.work.map(function(e) {
			return (
				<div className="work-item" key={e.id} >
					<img className="work-img" src={e.imageURL} alt=""/>
					<p>{e.title}</p>
				</div>
			)
		});
		return (
			<div className="work-list">
				{work}
			</div>
		)
	}
}

export default Work;