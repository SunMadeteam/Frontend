import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getStaffReducer } from './reducer/getStaffReducer.jsx'
import { ShowIconReducer } from './reducer/ShowIconReducer.jsx'
const rootReducer = combineReducers({
    Show:ShowIconReducer,
    Staff:getStaffReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))