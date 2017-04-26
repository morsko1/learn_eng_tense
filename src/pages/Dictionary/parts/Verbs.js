import React, { Component } from 'react';

class Verbs extends Component {
	render() {
		return (
			<div>
				<div
					className="btn-block"
					onClick={this.props.resetPart}>Словарь</div>
				<h3>Verbs</h3>
			</div>
		);
	}
}

export default Verbs;