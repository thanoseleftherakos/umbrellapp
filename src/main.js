import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Search from './components/search';
import Forecast from './components/forecast';
import reducers from './reducers';

import styles from './assets/sass/style.scss'; 

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<IndexRoute component={Search} />
    		<Route path="forecast" component={Forecast}/>
    	</Route>
    </Router> 
  </Provider>
  , document.getElementById('container'));
