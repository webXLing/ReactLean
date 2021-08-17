/*
 * @Author: web_XL
 * @Date: 2021-08-13 15:52:19
 * @LastEditors: web_XL
 * @LastEditTime: 2021-08-13 16:15:21
 * @Description:
 */
import { createStore } from 'redux';
import { Map } from 'immutable'

// const initialState = Map({
//     test: 1
// })
const initialState = {
    test: 1
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UPDATE_SINGLE_UI_VALUE":
            // return state.set("test", payload)
            return { ...state, test: payload }


        default:
            return state;
    }
};

export const customStore = createStore(rootReducer);
