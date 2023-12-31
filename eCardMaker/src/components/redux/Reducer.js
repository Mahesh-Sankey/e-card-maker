const { ADD_DATA } = require("./ActionConstant");

const initialState = []

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return [
                ...state,
                action.date
            ]

        default:
            return state
    }
}