import React, { Component } from 'react'

class Tweet extends Component {
	render() {
		return(
			<div className='tweet'>
				<img 
					src={this.props.pic}
					alt={`Avatar of ${this.props.author}`}
					className='avatar'
				/>
				<div className='tweet-info'>
				  <div>
					<span>{this.props.author}</span>
					<div>{this.props.date}</div>
					<p>{this.props.text}</p>
				  </div>    
				</div>
			</div>
		);
	}
}

export default Tweet;
