import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products: [], //api-data 
};

export const productReducers = (state = initialState, type, payload) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};
