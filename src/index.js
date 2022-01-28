import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/index';
import ReduxThunk from 'redux-thunk';

ReactDOM.render(
  <Provider store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
