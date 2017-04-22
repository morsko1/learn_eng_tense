import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Prepositions extends Component {
	render() {
		return (
			<div>
				<Link to="/dictionary" className="btn btn-default">Словарь</Link>
				<h2>Prepositions</h2>
			</div>
		);
	}
}

export default Prepositions;