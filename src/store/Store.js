import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import DevTools from '../containers/DevTools';

import api from '../middleware/api';
import rootReducer from '../reducers';
import InitialState from '../InitialState';

module.exports = createStore(
  rootReducer,
  InitialState,
  compose(
    applyMiddleware(thunk, api, createLogger()),
    DevTools.instrument()
  )
)
