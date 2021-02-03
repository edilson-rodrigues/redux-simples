import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
    number: function (state, action) {
        console.log('state-number', state, 'action-number', action)
        return {
            min: 7,
            max: 31,
        }
    },
    names: function (state, action) {
        // console.log('state-name', state, 'action-name', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
});

function configStore() {
    return createStore(reducers);
}

export default configStore;
