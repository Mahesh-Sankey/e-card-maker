import { ADD_DATA } from "./ActionConstant";

export function addCardData(items) {
    return {
        type: ADD_DATA,
        data: items
    }
}