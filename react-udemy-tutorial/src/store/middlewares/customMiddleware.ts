import { AnyAction, Middleware, Store } from "redux";
import FruitsActions from "../action/fruitsAction";
import { FruitsReducerAction } from "../reducer/fruitsReducer";
import { StoreStateStype } from "../reducer/rootReducer";
import { UsersReducersAction } from "../reducer/usersReducer";

export type CustomMiddlewareFunction<S, R> = (store: Store<S>) => R;

export interface CustomDispatch<S, R> {
    <T>(action: T): T
    (param: CustomMiddlewareFunction<S, R>): any;
}

export const customMiddleware: Middleware<{}, StoreStateStype, CustomDispatch<StoreStateStype, FruitsReducerAction | UsersReducersAction>> = store => next => action => {
    if (typeof action === 'function') {
        next(action(store));
    } else {
        next(action);
    }
}