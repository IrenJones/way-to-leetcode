import { combineReducers } from "redux";

export function tableReducer(state = defaultState, action) {
    switch (action.type) {
        case 'TABLE.SET_SHEET':
            return {
                ...state,
                selectedSheet: action.payload,
            };
        case 'TABLE.UPDATE_DATA':
            return {
                ...state,
                data: action.payload,
            };
        default: {
            return state;
        }
    }
}

const defaultState = {
    data: [],
    selectedSheet: "Easy"
};

export default combineReducers({
    table: tableReducer,
});
