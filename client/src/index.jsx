import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, browserHistory } from "react-router-dom";
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import createHistory from "history/createBrowserHistory";
import {
    ConnectedRouter,
    routerMiddleware,
} from "react-router-redux";

import mainReducer from './reducers/index'
import routes from "./routes";
import Menu from "./components/Menu/index";

const history = createHistory();

const store = createStore(
    mainReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, routerMiddleware(history)))
);

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

ReactDOM.render(
    <Provider store = {store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
     </Provider>,
    document.getElementById('root'));





