import { Action, Category } from './interfaces';

export enum CategoryActionType {
    ADD_CATEGORY = 'ADD_CATEGORY',
    GET_ALL_CATEGORY = 'GET_ALL_CATEGORY',
    UPDATE_CATEGORY = 'UPDATE_CATEGORY',
    DELETE_CATEGORY = 'DELETE_CATEGORY'
}

export const addCategoryAction = (category: Category): Action<CategoryActionType, Category> => {
    return {
        type: CategoryActionType.ADD_CATEGORY,
        payload: category
    };
}

export const getAllTasksAction = (categories: Array<Category>): Action<CategoryActionType, Array<Category>> => {
    return {
        type: CategoryActionType.GET_ALL_CATEGORY,
        payload: categories
    };
}

export const updateCategoryAction = (category: Category): Action<CategoryActionType, Category> => {
    return {
        type: CategoryActionType.UPDATE_CATEGORY,
        payload: category
    };
}

export const deleteCategoryAction = (categoryId: number): Action<CategoryActionType, number> => {
    return {
        type: CategoryActionType.DELETE_CATEGORY,
        payload: categoryId
    };
}
