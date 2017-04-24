import React, { Component } from 'react';

class Learning extends Component {

	render() {
		return (
			<div>
				<h3>Обучение</h3>

				<ul className="nav nav-tabs">
					<li className="active"><a data-toggle="tab" href="#past">Прошедшее</a></li>
					<li><a data-toggle="tab" href="#present">Настоящее</a></li>
					<li><a data-toggle="tab" href="#future">Будущее</a></li>
				</ul>

					<div className="tab-content">
						<div id="past" className="tab-pane fade in active learning-content" >
							Утверждение:<br/>
							I loved.<br/><br/>

							Отрицание:<br/>
							I did not love.<br/><br/>

							Вопрос:<br/>
							Did I love?
						</div>
						<div id="present" className="tab-pane fade learning-content" >
							Утверждение:<br/>
							I love.<br/><br/>

							Отрицание:<br/>
							I don`t love.<br/><br/>

							Вопрос:<br/>
							Do I love?
						</div>
						<div id="future" className="tab-pane fade learning-content" >
							Утверждение:<br/>
							I will love.<br/><br/>

							Отрицание:<br/>
							I will not love.<br/><br/>

							Вопрос:<br/>
							Will I love?
						</div>
					</div>
			</div>
		);
	}
}

export default Learning;