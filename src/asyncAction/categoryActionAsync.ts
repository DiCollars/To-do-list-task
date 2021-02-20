import DB, { addCategory, getCategories, deleteCategory, updateCategory } from '../database/db';
import { addCategoryAction, getAllTasksAction, deleteCategoryAction, updateCategoryAction, CategoryActionType } from '../actions/categoryAction';
import { Action, Category } from '../actions/interfaces';
import { Dispatch } from 'react';

const db = DB();

export const addCategoryAsync = (newCategory: Category) => {
    return function (dispatch: any) {
        addCategory(db, newCategory)
            .then((newCategoryId: number) => dispatch(addCategoryAction({...newCategory, id: newCategoryId})) )
            .catch(console.error);
    }
}

export const getAllCategoriesAsync = () => {
    return function (dispatch: Dispatch<Action<CategoryActionType, Category[]>>) {
        getCategories(db)
            .then((categories: Array<Category>) => dispatch(getAllTasksAction(categories)))
            .catch(console.error);
    }
}

export const updateCategoryAsync = (categoryId: number, fixedcategory: Category) => {
    return function (dispatch: Dispatch<Action<CategoryActionType, Category>>) {
        updateCategory(db, categoryId, fixedcategory)
            .then(() => dispatch(updateCategoryAction({ ...fixedcategory, id: categoryId })))
            .catch(console.error);
    }
}

export const deleteCategoryAsync = (categoryId: number) => {
    return function (dispatch: Dispatch<Action<CategoryActionType, number>>) {
        deleteCategory(db, categoryId)
            .then(() => dispatch(deleteCategoryAction(categoryId)))
            .catch(console.error);
    }
}
