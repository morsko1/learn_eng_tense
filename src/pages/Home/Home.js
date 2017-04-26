import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div>
				<h3>Выберите режим</h3>
						<div className="">
							<Link to="/learning" className="btn-block">Обучение</Link>
							<Link to="/dictionary" className="btn-block">Словарь</Link>
							<Link to="/test" className="btn-block">Тест</Link>
						</div>
			</div>
		);
	}
}

export default Home;