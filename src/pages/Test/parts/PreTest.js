import React, { Component } from 'react';

class PreTest extends Component {
	constructor(props) {
		super(props);
		this.state = {value: '2'};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
						Количество вопросов:<select
							name=""
							id="quantity"
							value={this.state.value}
							onChange={this.handleChange}>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
						<input type="submit" value="Старт"/>
				</form>
			</div>
		);
	}
}

export default PreTest;