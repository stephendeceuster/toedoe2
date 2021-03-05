 import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import listReducer from './todoList';

const store = createStore(listReducer, applyMiddleware(logger, thunk));

export default store;