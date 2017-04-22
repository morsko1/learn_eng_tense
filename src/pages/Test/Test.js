import React, { Component } from 'react';
import PreTest from './parts/PreTest.js';
import PostTest from './parts/PostTest.js';
import BodyTest from './parts/BodyTest.js';

class Test extends Component {
	constructor (props) {
		super (props);
		this.state = {
			value: '',
			currentQ: 0,
			isStarted: false,
			isFinished: false,
			questions: [
				{
					q: 'я люблю',
					a: 'i love'
				},
				{
					q: 'ты будешь любить?',
					a: 'will you love?'
				},
				{
					q: 'ты любил?',
					a: 'did you love?'
				}
			]
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.nextQ = this.nextQ.bind(this);
	}

	handleChange (event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit (event) {
		event.preventDefault();
		console.log('working');
		console.log(this.state.value);
		const formTest = document.getElementById('form-test');
		const currentQ = this.state.currentQ;
		if ((this.state.value).toLowerCase() === this.state.questions[currentQ].a) {
			console.log('right!');
			formTest.classList.add('has-success');
			formTest.classList.remove('has-error');
		} else {
			console.log('not match');
			formTest.classList.add('has-error');
			formTest.classList.remove('has-success');
		}
	}

	nextQ () {
		const formTest = document.getElementById('form-test');
		this.setState({value: ''});
		formTest.classList.remove('has-error');
		formTest.classList.remove('has-success');
		if (this.state.currentQ === this.state.questions.length - 1) {
			this.setState({isFinished: true});
			console.log('вопросы закончились');
			return;
		}
		this.setState((prevState, props) => ({
			currentQ: prevState.currentQ + 1
		}));
	}

	render() {
		const currentQ = this.state.currentQ;
		const isFinished = this.state.isFinished;

		return (
			<div>
				<h3>Тест</h3>
				<br/>
					<PreTest />

				{/*Conditional rendering*/}
				{ isFinished ? 
				<div>Вопросы закончились.</div> :
				<div>
					<h4>Вопрос 1:</h4>
					<h4>{this.state.questions[currentQ].q}</h4>
					<form
						onSubmit={this.handleSubmit}
						id="form-test"
						className="form-group">
						<div className="row">
							<div className="col-xs-1"></div>
							<div className="col-xs-8">
								<input 
									type="text"
									id="check-input"
									className="form-control"
									value={this.state.value}
									placeholder="Ваш ответ"
									autoComplete="off"
									onChange={this.handleChange} />
							</div>
							<div className="col-xs-2">
								<input
									type="submit"
									value="ok"
									className="btn btn-default"/>
							</div>
							<div className="col-xs-1"></div>
						</div> {/*end .row*/}
					</form>
					<div className="row">
						<div className="btn-group btn-group-vertical col-xs-12">
						<button className="btn btn-default" onClick={this.nextQ}>Следующий вопрос</button>
						</div>
					</div>
				</div>
				} {/*end Conditional rendering*/}


			</div>
		);
	}
}

export default Test;