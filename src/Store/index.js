import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { changeInput } from './Actions/Action.jsx'
import { getGoodsReducer } from './reducer/getGoodsReducer.jsx'
import { getOrderReducer } from './reducer/getOrderReducer.jsx'
import { getStaffReducer } from './reducer/getStaffReducer.jsx'
import { loginFailureReducer } from './reducer/loginFailureReducer.jsx'
import { loginReducer } from './reducer/loginReducer.jsx'
const rootReducer = combineReducers({
    Goods:getGoodsReducer,
    Staff:getStaffReducer,
    Order:getOrderReducer,
    Login:loginReducer,
    Failure:loginFailureReducer,
    Change:changeInput
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))