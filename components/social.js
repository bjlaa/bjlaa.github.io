/*
	Social component
*/

import React from 'react';

class Social extends React.Component {
  render() {
	return (
	  <div className='social'>
	  	<div className="social-message">Let's get in touch!</div>
	    <div className='social-section'>
	      <a href='https://twitter.com/bjlaa' target="_blank">
		  		<i className='fa fa-twitter-square'></i>
	      </a>
			</div>
			<div className='social-section'>
			  <a href='https://github.com/bjlaa' target="_blank">
			  	<i className='fa fa-github-square'></i>
			  </a>
			</div>
			<div className='social-section'>
			  <a href='https://www.linkedin.com/in/bjlaa' target="_blank">
			  	<i className='fa fa-linkedin-square'></i>
			  </a>
			</div>
	  </div>
	)
  }
}



export default Social;