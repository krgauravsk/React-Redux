import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products: [
        {
            id: 1,
            tittle: "Gaurav",
            category: "coding"
        },
    ],
};

export const productReducers = (state = initialState, type, payload) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};
