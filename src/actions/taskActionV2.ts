import { Action, Task } from './interfaces'

export enum TaskActionTypeV2 {
    DELETE_TASK = 'DELETE_TASK',
    ADD_TASK = 'ADD_TASK',
    GET_ALL_TASKS = 'GET_ALL_TASKS'
}

export const deleteTask = (taskid: number): Action<TaskActionTypeV2, number> => {
    return {
        type: TaskActionTypeV2.DELETE_TASK,
        payload: taskid
    };
}

export const addTask = (newTask: Task): Action<TaskActionTypeV2, Task> => {
    return {
        type: TaskActionTypeV2.ADD_TASK,
        payload: newTask
    };
}

export const getAllTasks = (tasks: Array<Task>): Action<TaskActionTypeV2, Array<Task>> => {
    return {
        type: TaskActionTypeV2.GET_ALL_TASKS,
        payload: tasks
    };
}

// export const updateCategory = (category: any): Action<CategoryActionType, any> => {
//     return {
//         type: CategoryActionType.UPDATE,
//         payload: category
//     };
// }
