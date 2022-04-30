import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { basketReducer } from './busket/busketRuduser';
import { favoriteReducer } from './favorite/favoriteReduce';

const persistConfig = {
   key: 'root',
   storage,
}

const rootReducer = combineReducers({
   basket:basketReducer,
   favorite:favoriteReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));
const persistore = persistStore(store)
export {persistore}