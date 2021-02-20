import { Action, Task } from '../actions/interfaces';
import { TaskActionType } from '../actions/taskAction';

export default function TaskReducer(state: Array<Task> = [], action: Action<TaskActionType, any>): Array<Task> {
    switch (action.type) {
        case TaskActionType.ADD_TASK:
            const tasks = [...state];
            tasks.push(action.payload);

            return tasks;

        case TaskActionType.GET_ALL_TASKS:

            return action.payload;

        case TaskActionType.UPDATE_TASK:
            const tasksUpdate = [...state];

            const newTasksUpdate = tasksUpdate.map(task => {
                if (task.id === action.payload.id) {
                    
                    return action.payload;
                }

                return task;
            });

            return newTasksUpdate;

        case TaskActionType.DELETE_TASK:
            const newTasks = [...state].filter(task => task.id !== action.payload);

            return newTasks;
            
        default:
            return state;
    }
}
