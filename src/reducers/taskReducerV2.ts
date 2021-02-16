import { Action } from '../actions/interfaces';
import { TaskActionTypeV2 } from '../actions/taskActionV2';

import DB, {addItem, getItems, updateItem, deleteItem } from '../database/db';

export default function TaskReducer(state: number = 0, action: Action<TaskActionTypeV2, any>): number {
    let db = DB();
    switch (action.type) {
        case TaskActionTypeV2.DELETE:
            deleteItem(db, action.payload);
            return state;
        default:
            return state;
    }
}