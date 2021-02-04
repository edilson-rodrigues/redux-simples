const initial_state = {
    min: 7,
    max: 31,
}

export default function (state = initial_state, action) {
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
            return state
    }
};

