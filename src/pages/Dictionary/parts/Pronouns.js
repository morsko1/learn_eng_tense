import React, { Component } from 'react';

class Pronouns extends Component {
	render() {
		return (
			<div>
				<button
					className="btn btn-default"
					onClick={this.props.resetPart}>Словарь</button>
				<h2>Pronouns</h2>
			</div>
		);
	}
}

export default Pronouns;