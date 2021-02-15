import { taskTable } from '../database/tasks';
import { Action } from '../actions/interfaces';
import { TaskActionType } from '../actions/taskAction'

export default function TaskReducer(state: Array<string> = taskTable, action: Action<TaskActionType, string>): Array<string> {
    switch (action.type) {
        case TaskActionType.DELETE:
            return state.filter(el => el !== action.payload);
        default:
            return state;
    }
}
