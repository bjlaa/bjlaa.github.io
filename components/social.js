/*
	Social component
*/

import React from 'react';

class Social extends React.Component {
  render() {
	return (
	  <div className='social'>

	    <a className='twitter' href='https://twitter.com/bjlaa'>
	      <div className='title-twitter'>Follow me on Twitter</div>
		  <i className='fa fa-twitter-square'></i>
		</a>
		<a className='github' href='https://github.com/bjlaa'>
		  <div className='title-git'>and on Github!</div>
		  <i className='fa fa-github-square'></i>
		</a>
	  </div>
	)
  }
}



export default Social;