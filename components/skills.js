/*
	Skills Component
	<Skills />
*/
import React from "react";
import {data} from "../scripts/data-model";
import Footer from '../components/footer.js';


class Skills extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollPosition: 1,
		};
		this.scrollRight = this.scrollRight.bind(this);
		this.scrollLeft = this.scrollLeft.bind(this);
	}
	componentDidMount() {
		this.refs.angleLeft.style.visibility = 'hidden';
	}
	scrollRight() {
		if(this.state.scrollPosition !== 3) {
			var list = document.querySelector('.skill-list');
			var distance = 800*this.state.scrollPosition;
			list.style.transform = 'translateX(-'+ distance +'px)';

			this.refs.angleLeft.style.visibility = 'initial';

			if(this.state.scrollPosition + 1 === 3) {
				console.log('ye');
				this.refs.angleRight.style.visibility = 'hidden';
			}
			this.setState({ scrollPosition: this.state.scrollPosition+1 });
			return;
		}

	}
	scrollLeft() {
		if(this.state.scrollPosition !== 1) {
			var list = document.querySelector('.skill-list');
			var distance = 800*(this.state.scrollPosition - 2);
			list.style.transform = 'translateX(-'+ distance +'px)';

			this.refs.angleRight.style.visibility = 'initial';

			if(this.state.scrollPosition - 1 === 1) {
				this.refs.angleLeft.style.visibility = 'hidden';
			}
			this.setState({ scrollPosition: this.state.scrollPosition-1 });
			return;
		}
	}
	render() {
		return (
			<div id='skills' className="skills">
				<div className='title-section-skills'>My Skills</div>
				<div onClick={this.scrollLeft} ref="angleLeft" className="angle-left">
					<i className="fa fa-angle-left" aria-hidden="true"></i>
				</div>
				<div className='container-skills' >
					<SkillItems data={data} />	
				</div>
				<div onClick={this.scrollRight} ref="angleRight" className="angle-right">
					<i className="fa fa-angle-right" aria-hidden="true"></i>
				</div>
			</div>
		)
	}
}
class SkillItems extends React.Component {
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
			<div className="container-skill-list">
				<div className="skill-list">
					{skill}
				</div>				
			</div>

		)
	}
}

export default Skills;