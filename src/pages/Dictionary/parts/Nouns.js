import React, { Component } from 'react';

class Nouns extends Component {
	render() {
		return (
			<div>
				<button
					className="btn btn-default"
					onClick={this.props.resetPart}>Словарь</button>
				<h2>Nouns</h2>
			</div>
		);
	}
}

export default Nouns;