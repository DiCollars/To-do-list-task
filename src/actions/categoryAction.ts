import { Action } from './interfaces'

export enum CategoryActionType {
    DELETE = 'DELETE'
}

export const deleteCategory = (text: string): Action<CategoryActionType, string> => {
    return {
        type: CategoryActionType.DELETE,
        payload: text
    };
}