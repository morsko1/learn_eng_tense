import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Learning from './pages/Learning/Learning.js'
import Test from './pages/Test/Test.js'
import Dictionary from './pages/Dictionary/Dictionary.js'

document.getElementById('root').style.minHeight = document.body.scrollHeight + 'px';

class App extends Component {
	render() {
		return (
			<Router>
					<div>
						<Link to="/" className="btn btn-default">На главную</Link>
						<Route exact path="/" component={Home}/>
						<Route path="/learning" component={Learning}/>
						<Route exact path="/dictionary" component={Dictionary}/>
								{/*<Route path="/dictionary/pronouns" component={Pronouns}/>
								<Route path="/dictionary/verbs" component={Verbs}/>
								<Route path="/dictionary/nouns" component={Nouns}/>
								<Route path="/dictionary/prepositions" component={Prepositions}/>*/}
						<Route path="/test" component={Test}/>
					</div>
			</Router>
		);
	}
}

export default App;