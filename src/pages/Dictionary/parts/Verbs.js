import React, { Component } from 'react';

class Verbs extends Component {
	render() {
		return (
			<div>
				<button
					className="btn btn-default"
					onClick={this.props.resetPart}>Словарь</button>
				<h2>Verbs</h2>
			</div>
		);
	}
}

export default Verbs;