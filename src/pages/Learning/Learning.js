import React, { Component } from 'react';

class Learning extends Component {
	constructor (props) {
		super (props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick (event) {
		const tabcontent = document.getElementsByClassName('tabcontent');
		for (let i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = 'none';
		}
		const tablinks = document.getElementsByClassName('tablink');
			for (let i = 0; i < tablinks.length; i++) {
				tablinks[i].className = tablinks[i].className.replace(' active', '');
			}
		document.getElementById(event.target.dataset.tense).style.display = 'block';
		event.target.classList.add('active');
	}
	render() {
		return (
			<div>
				<h3>Обучение</h3>

				<div className="tabs">
					<div data-tense="past" className="tablink btn-block" onClick={this.handleClick}>Прошедшее</div>
					<div data-tense="present" className="tablink btn-block active" onClick={this.handleClick}>Настоящее</div>
					<div data-tense="future" className="tablink btn-block" onClick={this.handleClick}>Будущее</div>
				</div>

					<div className="">
						<div id="past" className=" tabcontent learning-content" >
							Утверждение:<br/>
							I loved.<br/><br/>

							Отрицание:<br/>
							I did not love.<br/><br/>

							Вопрос:<br/>
							Did I love?
						</div>
						<div id="present" className="tabcontent learning-content" >
							Утверждение:<br/>
							I love.<br/><br/>

							Отрицание:<br/>
							I don`t love.<br/><br/>

							Вопрос:<br/>
							Do I love?
						</div>
						<div id="future" className="tabcontent learning-content" >
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