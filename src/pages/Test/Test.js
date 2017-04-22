import React, { Component } from 'react';
import PreTest from './parts/PreTest.js';
import PostTest from './parts/PostTest.js';
import BodyTest from './parts/BodyTest.js';

class Test extends Component {
	constructor (props) {
		super (props);
		this.state = {
			status: 'pre',
			quantity: 0
		};
		this.changeState = this.changeState.bind(this);
		this.setQuantity = this.setQuantity.bind(this);
	}

	changeState (newValue) {
		this.setState({
			status: newValue
		});
	}
	setQuantity (num) {
		this.setState({
			quantity: num
		});
	}

	render() {

		return (
			<div>
				<h3>Тест</h3>
				<br/>
					{(() => {
						switch (this.state.status) {
							case 'pre':
								return <PreTest changeState={this.changeState} setQuantity={this.setQuantity}/>
							case 'testing':
								return <BodyTest changeState={this.changeState} quantity={this.state.quantity}/>
							case 'post':
								return <PostTest changeState={this.changeState}/>
							default :
								return null
						}
					})()}
			</div>
		);
	}
}

export default Test;