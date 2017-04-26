import React, { Component } from 'react';

class Nouns extends Component {
	render() {
		return (
			<div>
				<div
					className="btn-block"
					onClick={this.props.resetPart}>Словарь</div>
				<h3>Nouns</h3>
			</div>
		);
	}
}

export default Nouns;