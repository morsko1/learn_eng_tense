import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pronouns extends Component {
	render() {
		return (
			<div>
				<Link to="/dictionary" className="btn btn-default">Словарь</Link>
				<h2>Pronouns</h2>
			</div>
		);
	}
}

export default Pronouns;