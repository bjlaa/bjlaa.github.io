/*
	Skills Component
	<Skills />
*/
import React from "react";
import {data} from "../scripts/data-model";
import Footer from '../components/footer.js';


class Skills extends React.Component {
	render() {
		return (
			<div id='skills' className="skills">
				<div className='title-section-skills'>My Skills</div>
				<div className='container-skills' >
						<SkillItem data={data} />				
				</div>
			</div>
		)
	}
}
class SkillItem extends React.Component {
	render() {
		var skill = this.props.data.skills.map(function(e) {
			return (
				<div className={e.class} key={e.id}>
					<img className="skill-img" src={e.imageURL} alt={e.imageAlt}/>
					<div className='skill-details' >
						<p className="skill-title">{e.title}</p>
						<div className="keywords">{e.description}</div>
					</div>
					
					
					
				</div>
			)
		});
		return (
			<div className="skill-list">
				{skill}
			</div>
		)
	}
}

export default Skills;