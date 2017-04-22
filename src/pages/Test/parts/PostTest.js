import React, { Component } from 'react';

class PostTest extends Component {
	constructor (props) {
		super (props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick () {
		this.props.changeState('pre');
	}
	render() {
		return (
			<div>
				<div>Вопросы закончились.</div>
				<button className="btn btn-default" onClick={this.handleClick}>Начать заново</button>
			</div>
		);
	}
}

export default PostTest;