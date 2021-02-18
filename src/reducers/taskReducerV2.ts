import { Action, Task } from '../actions/interfaces';
import { TaskActionTypeV2 } from '../actions/taskActionV2';
import DB, { addItem, getItems, updateItem, deleteItem } from '../database/db';

export default function TaskReducer(state: Array<Task> = [], action: Action<TaskActionTypeV2, any>): Array<Task> {

    switch (action.type) {
        case TaskActionTypeV2.DELETE_TASK:
            return state;
        case TaskActionTypeV2.GET_ALL_TASKS:
            return action.payload;
        case TaskActionTypeV2.ADD_TASK:
            console.log("*******");
            console.log(action.payload);
            const tasks = [...state];
            tasks.push(action.payload);
            return state;
        // case TaskActionTypeV2.UPDATE:
        //     updateCategory(db, action.payload.id, { name: action.payload.name, description: action.payload.description });
        //     return state;
        default:
            return state;
    }
}