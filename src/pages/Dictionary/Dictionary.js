import React, { Component } from 'react';

import Pronouns from './parts/Pronouns.js'
import Verbs from './parts/Verbs.js'
import Nouns from './parts/Nouns.js'
import Prepositions from './parts/Prepositions.js'

class Dictionary extends Component {
	constructor (props) {
		super (props);
		this.state = {part: ''}

		this.handleClick = this.handleClick.bind(this);
		this.resetPart = this.resetPart.bind(this);
	}

	resetPart () {
		this.setState({part: ''});
	}

	handleClick (event) {
		this.setState({part: event.target.id});
	}

	render() {
		return (
			<div>
				{(this.state.part === '') ?
					<div>
						<h3>Словарь</h3>
						<div className="row" onClick={this.handleClick}>
							<div className="btn-group btn-group-vertical col-xs-12">
								<button
									id="pronouns"
									className="btn btn-default">Местоимения</button>
								<button
									id="verbs"
									className="btn btn-default">Глаголы</button>
								<button
									id="nouns"
									className="btn btn-default">Существительные</button>
								<button
									id="prepositions"
									className="btn btn-default">Предлоги</button>
							</div>
						</div>
					</div>
					:
					(() => {
						switch (this.state.part) {
							case 'pronouns':
								return <Pronouns resetPart={this.resetPart}/>
							case 'verbs':
								return <Verbs resetPart={this.resetPart}/>
							case 'nouns':
								return <Nouns resetPart={this.resetPart}/>
							case 'prepositions':
								return <Prepositions resetPart={this.resetPart}/>
							default :
								return null
						}
					})()
			}
			</div>
		);
	}
}

export default Dictionary;