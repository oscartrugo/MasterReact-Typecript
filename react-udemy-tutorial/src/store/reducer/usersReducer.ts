import { Reducer } from "redux";

export interface UsersReducersAction {
    type: string;
    users: string[];
}

export const usersReducer: Reducer<string[], UsersReducersAction> = (state = [], action) => {
    switch(action.type) {
        case "ADD_USERS":
            return [ ...state, ...action.users ];
        default:
            return state;
    }
}