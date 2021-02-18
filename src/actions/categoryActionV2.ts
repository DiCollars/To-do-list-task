import { Action, Category } from './interfaces';

export enum CategoryActionType {
    DELETE_CATEGORY = 'DELETE_CATEGORY',
    ADD_CATEGORY = 'ADD_CATEGORY',
    UPDATE_CATEGORY = 'UPDATE_CATEGORY'
}

export const deleteCategory = (categoryId: number): Action<CategoryActionType, any> => {
    return {
        type: CategoryActionType.DELETE_CATEGORY,
        payload: categoryId
    };
}

export const addCategory = (category: Category): Action<CategoryActionType, any> => {
    return {
        type: CategoryActionType.ADD_CATEGORY,
        payload: category
    };
}

export const updateCategory = (category: Category): Action<CategoryActionType, any> => {
    return {
        type: CategoryActionType.UPDATE_CATEGORY,
        payload: category
    };
}