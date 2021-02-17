import { Action } from './interfaces'

export enum TaskActionTypeV2 {
    DELETE_TASK = 'DELETE_TASK',
    ADD_TASK = 'ADD_TASK'
}

export const deleteTask = (taskid: number): Action<TaskActionTypeV2, any> => {
    return {
        type: TaskActionTypeV2.DELETE_TASK,
        payload: taskid
    };
}

export const addTask = (newTask: any): Action<TaskActionTypeV2, any> => {
    return {
        type: TaskActionTypeV2.ADD_TASK,
        payload: newTask
    };
}

// export const updateCategory = (category: any): Action<CategoryActionType, any> => {
//     return {
//         type: CategoryActionType.UPDATE,
//         payload: category
//     };
// }
