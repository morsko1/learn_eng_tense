import React, { Component } from 'react';
import dict from './dictionary.json';
import {
	Link
} from 'react-router-dom';

class DictionaryContent extends Component {
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
		const part = this.props.match.params.part;
		const list = dict[part].content.map((word) => 
			<tr key={word.en.toString()}>
				<td><span>{word.en}</span></td>
				<td><span>{word.ru}</span></td>
			</tr>
		);
		return (
			<div>
				<Link to="/dictionary" className="btn-block">Словарь</Link>
				<h3>{dict[part].title}</h3>
				<div className="tooltip">нажмите, чтобы скрыть/показать</div>
				<table className="table-words">
					<thead>
						<tr
							onClick={this.handleClick}
							onMouseOver={this.handleHover}
							onMouseOut={this.handleOut}>
							<th >eng</th>
							<th >rus</th>
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

export default DictionaryContent;