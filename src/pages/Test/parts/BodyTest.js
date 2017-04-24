import React, { Component } from 'react';
import questions from './questions'

class BodyTest extends Component {
	constructor (props) {
		super (props);
		this.state = {
			value: '',
			currentQ: 0,
			questions: questions
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
		const quantity = this.props.quantity;
		this.setState({value: ''});

		if (formTest.classList.contains('has-success')) {
			this.props.right();
		} else {
			this.props.wrong();
		}

		formTest.classList.remove('has-error');
		formTest.classList.remove('has-success');

		// if no more questions
		if (this.state.currentQ === quantity - 1) {
			this.props.changeStatus('post');
			console.log('вопросы закончились');
			return;
		}
		this.setState((prevState) => ({
			currentQ: prevState.currentQ + 1
		}));
	}

	render() {
		const currentQ = this.state.currentQ;
		return (
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
		);
	}
}

export default BodyTest;