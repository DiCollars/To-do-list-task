import { categoryTable } from '../database/categories';
import { Action } from '../actions/interfaces';
import {CategoryActionType} from '../actions/categoryAction'

export default function CategoryReducer(state: Array<string> = categoryTable, action: Action<CategoryActionType, string>): Array<string> {
    switch (action.type) {
        case CategoryActionType.DELETE:
            return state.filter(el => el !== action.payload);
        default:
            return state;
    }
}
