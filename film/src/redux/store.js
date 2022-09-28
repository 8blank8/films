/* eslint-disable prettier/prettier */
import { combineReducers, createStore } from 'redux';
import { reducerUser } from './reducers/reducerUser';


const rootReducer = combineReducers({
   user: reducerUser
});

const store = createStore(rootReducer);


export default store;