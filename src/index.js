import React, {Component, component} from 'react';
import Reactdom from 'react-dom';
import {BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom'
//pages
import Home from './pages/Home';
import Quran from './pages/Quran';
import Hadtih from './pages/Hadith';
import Debate from './pages/Debate';
import Alerts from './pages/Alerts';
import ErrorPageNotFound from './error/404';
import Hadith from './pages/Hadith';


class App extends Component {
    render() {
        return (
        <Router>
          <Switch>
            <Route exact path="/quran" component={Quran}/>
            <Route exact path="/hadith" component={Hadtih} />
            <Route exact path="/debate" component={Debate} />
            <Route exact path="/alerts" component={Alerts} />
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
        );
    }
}
Reactdom.render(<App />, document.getElementById("root"));
