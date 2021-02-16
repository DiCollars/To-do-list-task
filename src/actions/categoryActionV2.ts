import { Action } from './interfaces'

export enum CategoryActionType {
    DELETE = 'DELETE'
}

export const deleteCategory = (categoryId: number): Action<CategoryActionType, any> => {
    return {
        type: CategoryActionType.DELETE,
        payload: categoryId
    };
}