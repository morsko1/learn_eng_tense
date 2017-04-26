import React, { Component } from 'react';

class Prepositions extends Component {
	render() {
		return (
			<div>
				<div
					className="btn-block"
					onClick={this.props.resetPart}>Словарь</div>
				<h3>Prepositions</h3>
			</div>
		);
	}
}

export default Prepositions;