import { Action } from '../actions/interfaces';
import { CategoryActionType } from '../actions/categoryActionV2'

import DB, { addCategory, getCategories, updateCategory, deleteCategory } from '../database/db';

export default function CategoryReducer(state: number = 0, action: Action<CategoryActionType, any>): number {
    let db = DB();
    switch (action.type) {
        case CategoryActionType.DELETE_CATEGORY:
            deleteCategory(db, action.payload);
            return state;
        case CategoryActionType.ADD_CATEGORY:
            addCategory(db, action.payload);
            return state;
        case CategoryActionType.UPDATE_CATEGORY:
            updateCategory(db, action.payload.id, {name: action.payload.name, description: action.payload.description});
            return state;
        default:
            return state;
    }
}
