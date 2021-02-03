import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    number: function (state, action){
        console.log('state-number', state, 'action-number', action)
        return{
            min:1,
            max: 10,
        }
    },
    names: function (state, action){
        console.log('state-name', state, 'action-name', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
});

function configStore(){
    return createStore(reducers);
}

export default configStore;
