import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}

// function that gets a state and an object
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // check if current object is set to current user
        case UserActionTypes.SET_CURRENT_USER:
            // set state to current user
            return {
                ...state,
                currentUser: action.payload
            }
        // if no state matches return default
        default:
            return state;
    }
}

export default userReducer;