import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div>
				<h3>Выберите режим</h3>
					<div className="row">
						<div className="btn-group btn-group-vertical col-xs-12">
							<Link to="/learning" className="btn btn-default">Обучение</Link>
							<Link to="/dictionary" className="btn btn-default">Словарь</Link>
							<Link to="/tests" className="btn btn-default">Тесты</Link>
						</div>
					</div>
			</div>
		);
	}
}

export default Home;