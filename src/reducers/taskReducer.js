import { taskTable } from '../database/tasks';

export default function TaskReducer(state = taskTable, action) {
    switch (action.type) {
        case 'DELETE_TASK':
            return state.filter(el => el !== action.payload);
        default:
            return state;
    }
}