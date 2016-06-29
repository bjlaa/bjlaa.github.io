/*
	Social component
*/

import React from 'react';

class Social extends React.Component {
  render() {
	return (
	  <div className='social'>
	    <div className='twitter'>
	      <div className='title-twitter'>Follow me on Twitter</div>
	      <a href='https://twitter.com/bjlaa'>
		  		<i className='fa fa-twitter-square'></i>
	      </a>
			</div>
			<div className='github'>
			  <div className='title-git'>and on Github!</div>
			  <a href='https://github.com/bjlaa'>
			  	<i className='fa fa-github-square'></i>
			  </a>
			</div>
	  </div>
	)
  }
}



export default Social;