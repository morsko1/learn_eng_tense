import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom'
import Home from './pages/Home/Home.js';
import Learning from './pages/Learning/Learning.js';
import Dictionary from './pages/Dictionary/Dictionary.js';
import DictionaryContent from './pages/Dictionary/parts/DictionaryContent.js';
import Test from './pages/Test/Test.js';
import NotFound from './pages/NotFound/NotFound.js';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Link to="/" className="btn-block">На главную</Link>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/learning" component={Learning}/>
						<Route exact path="/dictionary" component={Dictionary}/>
						<Route exact path="/dictionary/:part" component={DictionaryContent}/>
						<Route path="/test" component={Test}/>
						<Route component={NotFound}/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;