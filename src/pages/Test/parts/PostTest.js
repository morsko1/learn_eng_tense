import React, { Component } from 'react';

class PostTest extends Component {
	constructor (props) {
		super (props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick () {
		this.props.resetResult();
		this.props.changeStatus('pre');
	}
	render() {
		return (
			<div>
				<div>Вопросы закончились.</div>
				Правильные: {this.props.right} <br/>
				Неправильные: {this.props.wrong} <br/>
				<div className="btn-block" onClick={this.handleClick}>Начать заново</div>
			</div>
		);
	}
}

export default PostTest;