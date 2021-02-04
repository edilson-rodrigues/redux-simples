import {combineReducers, createStore} from 'redux';

import numberReducer from './reducers/numbers_reducers'

const reducers = combineReducers({
    number: numberReducer,
});

function configStore() {
    return createStore(reducers);
}

export default configStore;
