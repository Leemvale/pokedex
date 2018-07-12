import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from "./components/Menu";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import routes from"./routes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu/>
                <Switch>
                    {routes.map((item, idx) => <Route key={idx} {...item} />)}
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));