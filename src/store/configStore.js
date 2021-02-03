import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
    number: function (state, action) {
        // console.log('state-number', state, 'action-number', action)
        switch (action.type) {
            case 'NUM_MIM_CHANGE' :
                return {
                    ...state,
                    min: action.payload,
                }
            case 'NUM_MAX_CHANGE' :
                return {
                    ...state,
                    max: action.payload,
                }
            default :
                return {
                    min: 7,
                    max: 31,
                };
        }
    },
});

function configStore() {
    return createStore(reducers);
}

export default configStore;
