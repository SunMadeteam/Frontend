import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { ShowIconReducer } from './reducer/ShowIconReducer.jsx'
const rootReducer = combineReducers({
    Show:ShowIconReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())