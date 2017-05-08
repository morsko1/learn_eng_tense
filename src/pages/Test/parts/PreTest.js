import React, { Component } from 'react';
import questions from './questions';

class PreTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: questions.length,
			length: questions.length
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		/*установить state.status = 'testing' у компонента Test*/
		this.props.changeStatus('testing');
		this.props.setQuantity(parseInt(this.state.value, 10));
	}
	render() {
		return (
			<div>
				<form className="pre-test" onSubmit={this.handleSubmit} >
						<span>Количество вопросов: </span>
						<select
							name=""
							id="quantity"
							value={this.state.value}
							onChange={this.handleChange}>
							<option value={this.state.length}>все</option>
							<option value={parseInt(this.state.length/2, 10)}>половина</option>
						</select>
						<div>
							<input className="start btn-block" type="submit" value="Старт"/>
						</div>
				</form>
			</div>
		);
	}
}

export default PreTest;