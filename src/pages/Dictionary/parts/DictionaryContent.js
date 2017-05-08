import React, { Component } from 'react';
import dict from './dictionary.json';

class Pronouns extends Component {
	constructor (props) {
		super (props);
		this.handleClick = this.handleClick.bind(this);
		this.handleHover = this.handleHover.bind(this);
		this.handleOut = this.handleOut.bind(this);
	}

	handleClick (event) {
		const target = event.target;
		const index = target.cellIndex;
		const rows = document.getElementsByTagName('tbody')[0].rows;
		for (let i=0; i<rows.length; i++) {
			let row = rows[i];
			let cell = row.cells[index];
			if (cell.firstElementChild.hidden) {
				cell.firstElementChild.removeAttribute('hidden');
			} else {
				cell.firstElementChild.setAttribute('hidden', true);
			}
		}
	}

	handleHover (event) {
		const tooltip = document.getElementsByClassName('tooltip')[0];
		tooltip.style.display = 'block';
		const coords = document.getElementsByTagName('table')[0].getBoundingClientRect();
		const fontSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
		tooltip.style.top = (coords.top + window.pageYOffset - parseInt(fontSize, 10)*2) + 'px';
		tooltip.style.left = (coords.left - parseInt(fontSize, 10)*2) + 'px';
	}
	handleOut (event) {
		const tooltip = document.getElementsByClassName('tooltip')[0];
		tooltip.style.display = '';
	}

	render() {
		const list = dict[this.props.part].content.map((word) => 
			<tr key={word.en.toString()}>
				<td><span>{word.en}</span></td>
				<td><span>{word.ru}</span></td>
			</tr>
		);
		return (
			<div>
				<div
					className="btn-block"
					onClick={this.props.resetPart}>Словарь</div>
				<h3>{dict[this.props.part].title}</h3>
				<div className="tooltip">нажмите, чтобы скрыть/показать</div>
				<table className="table-words">
					<thead>
						<tr
							onClick={this.handleClick}
							onMouseOver={this.handleHover}
							onMouseOut={this.handleOut}>
							<th >eng {String.fromCharCode( '&amp' )}</th>
							<th >rus {String.fromCharCode( '&#128065' )}</th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Pronouns;