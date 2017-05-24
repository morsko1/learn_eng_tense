import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Dictionary extends Component {

	render() {
		return (
			<div>
				<h3>Словарь</h3>
				<Link
					to="/dictionary/pronouns"
					className="btn-block">
					Местоимения
				</Link>
				<Link
					to="/dictionary/verbs"
					className="btn-block">
					Глаголы
				</Link>
				<Link
					to="/dictionary/nouns"
					className="btn-block">
					Существительные
				</Link>
				<Link
					to="/dictionary/prepositions"
					className="btn-block">
					Предлоги
				</Link>
			</div>
		);
	}
}

export default Dictionary;