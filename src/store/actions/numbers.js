//action creator
export const actionChangeNumberMin = (newNumber) => {
    return {
        type: 'NUM_MIM_CHANGE',
        payload: newNumber,
    }
}

export const actionChangeNumberMax = (newNumber) => {
    return {
        type: 'NUM_MAX_CHANGE',
        payload: newNumber,
    }
}
