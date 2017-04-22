import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Dictionary extends Component {
	render() {
		return (
			<div>
				<h3>Dictionary</h3>
					<div className="row">
						<div className="btn-group btn-group-vertical col-xs-12">
							<Link to="/dictionary/pronouns" className="btn btn-default">Местоимения</Link>
							<Link to="/dictionary/verbs" className="btn btn-default">Глаголы</Link>
							<Link to="/dictionary/nouns"  className="btn btn-default">Существительные</Link>
							<Link to="/dictionary/prepositions"  className="btn btn-default">Предлоги</Link>
						</div>
					</div>
			</div>
		);
	}
}

export default Dictionary;