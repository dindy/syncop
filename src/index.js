// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

// Styles
import './index.css';

// Modules
import App from './App';

// Services
import registerServiceWorker from './registerServiceWorker'
import { store, history } from './store'


ReactDOM.render(
  <Provider store={store}>
  	<ConnectedRouter history={history}>
		<Route path="/" component={App} />  	
	</ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
)
registerServiceWorker()
