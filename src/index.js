import React from 'react';
import ReactDOM from 'react-dom';
//import {createStore,combineReducers,applyMiddleware} from 'redux';
//import logger from 'redux-logger';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';
//import * as reducers from './reducers';
import createStore from './createStore';
//import { from } from 'rxjs';

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
