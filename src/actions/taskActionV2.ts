import { Action } from './interfaces'

export enum TaskActionTypeV2 {
    DELETE = 'DELETE'
}

export const deleteTask = (taskid: number): Action<TaskActionTypeV2, any> => {
    return {
        type: TaskActionTypeV2.DELETE,
        payload: taskid
    };
}
