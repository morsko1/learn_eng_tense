import React, { Component } from 'react';

class Prepositions extends Component {
	render() {
		return (
			<div>
				<button
					className="btn btn-default"
					onClick={this.props.resetPart}>Словарь</button>
				<h2>Prepositions</h2>
			</div>
		);
	}
}

export default Prepositions;