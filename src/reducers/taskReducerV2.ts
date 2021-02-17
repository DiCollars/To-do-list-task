import { Action } from '../actions/interfaces';
import { TaskActionTypeV2 } from '../actions/taskActionV2';

import DB, { addItem, getItems, updateItem, deleteItem } from '../database/db';

export default function TaskReducer(state: number = 0, action: Action<TaskActionTypeV2, any>): number {
    let db = DB();
    switch (action.type) {
        case TaskActionTypeV2.DELETE_TASK:
            deleteItem(db, action.payload);
            return state;
        case TaskActionTypeV2.ADD_TASK:
            addItem(db, action.payload);
            return state;
        // case TaskActionTypeV2.UPDATE:
        //     updateCategory(db, action.payload.id, { name: action.payload.name, description: action.payload.description });
        //     return state;
        default:
            return state;
    }
}