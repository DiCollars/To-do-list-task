import { Action } from './interfaces'

export enum TaskActionType {
    DELETE = 'DELETE'
}

export const deleteTask = (text: string): Action<TaskActionType, string> => {
    return {
        type: TaskActionType.DELETE,
        payload: text
    };
}