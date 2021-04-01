import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import App from './components/app/app';

import reducer from './store/reducer.js';
import { createAPI } from './services/api.js';
import { fetchLeagues, fetchTeams, fetchLeagueSeason } from './store/api-actions';

const api = createAPI();
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

store.dispatch(fetchLeagues());
store.dispatch(fetchTeams());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);

