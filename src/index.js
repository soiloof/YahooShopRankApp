import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as reducers from './reducers';
//import { from } from 'rxjs';


const store = createStore(
    combineReducers(reducers),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
