export const NUM_MIN = 'NUM_MIM_CHANGE';
export const NUM_MAX = 'NUM_MAX_CHANGE';

export const actionChangeNumberMin = (newNumber) => {
    return {
        type: NUM_MIN,
        payload: newNumber,
    }
}

export const actionChangeNumberMax = (newNumber) => {
    return {
        type: NUM_MAX,
        payload: newNumber,
    }
}
