import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,applyMiddleware } from 'redux';
import newsHandling from './reducers/Index';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import thunk from 'redux-thunk';
//const store = createStore(newsHandling, {})


const store = createStore(
  newsHandling ,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ,applyMiddleware(ReduxThunk)

);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
