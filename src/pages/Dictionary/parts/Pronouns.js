import React, { Component } from 'react';

class Pronouns extends Component {
	render() {
		return (
			<div>
				<div
					className="btn-block"
					onClick={this.props.resetPart}>Словарь</div>
				<h3>Pronouns</h3>
			</div>
		);
	}
}

export default Pronouns;