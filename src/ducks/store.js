import {createStore, combineReducers, applyMiddleware} from 'redux'
import reducer from './reducer'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
    reducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))