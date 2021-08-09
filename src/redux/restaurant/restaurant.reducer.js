import RESTAURANT_DATA from "../../pages/restaurant/restaurant.data"

const INITIAL_STATE = {
    collections: RESTAURANT_DATA
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default restaurantReducer;