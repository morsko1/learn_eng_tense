import React, { Component } from 'react';
import PreTest from './parts/PreTest.js';
import PostTest from './parts/PostTest.js';
import BodyTest from './parts/BodyTest.js';

class Test extends Component {
	constructor (props) {
		super (props);
		this.state = {
			status: 'pre',
			quantity: 0,
			right: 0,
			wrong: 0
		};
		this.changeStatus = this.changeStatus.bind(this);
		this.setQuantity = this.setQuantity.bind(this);
		this.right = this.right.bind(this);
		this.wrong = this.wrong.bind(this);
		this.resetResult = this.resetResult.bind(this);
	}

	changeStatus (newValue) {
		this.setState({
			status: newValue
		});
	}
	setQuantity (num) {
		this.setState({
			quantity: num
		});
	}
	right () {
		this.setState((prevState) => ({
			right: prevState.right + 1
		}));
	}
	wrong () {
		this.setState((prevState) => ({
			wrong: prevState.wrong + 1
		}));
	}
	resetResult () {
		this.setState({
			right: 0,
			wrong: 0
		})
	}
	render() {

		return (
			<div>
				<h3>Тест</h3>
				<br/>
					{(() => {
						switch (this.state.status) {
							case 'pre':
								return <PreTest
												changeStatus={this.changeStatus}
												setQuantity={this.setQuantity}/>
							case 'testing':
								return <BodyTest
												changeStatus={this.changeStatus}
												right={this.right}
												wrong={this.wrong}
												quantity={this.state.quantity}/>
							case 'post':
								return <PostTest
												changeStatus={this.changeStatus}
												right={this.state.right}
												wrong={this.state.wrong}
												resetResult={this.resetResult}/>
							default :
								return null
						}
					})()}
			</div>
		);
	}
}

export default Test;