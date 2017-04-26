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
							<option value="2">2</option>
							<option value="3">3</option>
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