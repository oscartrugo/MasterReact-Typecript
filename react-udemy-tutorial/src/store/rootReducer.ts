import { combineReducers } from "redux";
import { notesReducer } from "./reducers/NotesReducer";

export const rootReducer = combineReducers({
    notes: notesReducer,
});

export type StoreStateType = ReturnType<typeof rootReducer>;