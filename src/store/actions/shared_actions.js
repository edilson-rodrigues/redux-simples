import {actionChangeNumberMax, actionChangeNumberMin} from "./numbers_actions";

export const mapStateToProps = (state) => {
    return {
        min: state.number.min,
        max: state.number.max,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        changeNumberMin(number) {
            //action creator -> action
            const action = actionChangeNumberMin(number);
            dispatch(action);
        },
        changeNumberMax(number) {
            //action creator -> action
            const action = actionChangeNumberMax(number);
            dispatch(action);
        }
    }
}
