import {NUM_MAX, NUM_MIN} from "../actions/numbers_actions";

const initialState = {
    min: 7,
    max: 31,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NUM_MIN :
            return {...state, min: action.payload}
        case NUM_MAX :
            return {...state, max: action.payload,}
        default :
            return state
    }
};

export default reducer;
