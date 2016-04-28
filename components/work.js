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
				<div className='title-section-work'>My Work</div>
				<WorkList data={data} />
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
					<a href={e.page} target="_blank" className="button-work">View Demo</a>
					<a href={e.URL} target="_blank" className="button-work">View on Github</a>
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