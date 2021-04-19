import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './App.jsx';
import reportWebVitals from './reportWebVitals';
import {Provider } from 'react-redux'
import {createStore} from 'redux'
import {messageReducer} from './reducers/reducers.js'

const store =createStore(messageReducer)

ReactDOM.render( 
	<Provider store={store}>
		<Container />
	</Provider>,
	document.getElementById('root')
	);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
