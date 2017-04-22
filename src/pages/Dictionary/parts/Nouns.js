import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nouns extends Component {
	render() {
		return (
			<div>
				<Link to="/dictionary" className="btn btn-default">Словарь</Link>
				<h2>Nouns</h2>
			</div>
		);
	}
}

export default Nouns;