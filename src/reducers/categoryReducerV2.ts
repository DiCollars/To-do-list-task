import { Action } from '../actions/interfaces';
import {CategoryActionType} from '../actions/categoryActionV2'

import DB, { addCategory, getCategories,  updateCategory, deleteCategory} from '../database/db';

export default function CategoryReducer(state: number = 0, action: Action<CategoryActionType, any>): number {
    let db = DB();
    switch (action.type) {
        case CategoryActionType.DELETE:
            deleteCategory(db, action.payload);
            return state;
        default:
            return state;
    }
}