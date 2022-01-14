import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reducer from './counter';
import todoReducer from './todos';


const rootReducer = combineReducers({
    counterReducer: reducer,
    todoReducer,
});

const store = configureStore({
    reducer: rootReducer
})

export default store;