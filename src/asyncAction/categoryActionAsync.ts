import DB, { addCategory, getCategories, deleteCategory, updateCategory } from '../database/db';
import { addCategoryAction, getAllCategoryAction, deleteCategoryAction, updateCategoryAction } from '../reducers/categorySlice';
import { Category } from '../interfaces';

export const addCategoryAsync = (newCategory: Category) => {
    return function (dispatch: any) {
        addCategory(newCategory)
            .then((newCategoryId: number) => dispatch(addCategoryAction({...newCategory, id: newCategoryId})) )
            .catch(console.error);
    }
}

export const getAllCategoriesAsync = () => {
    return function (dispatch: any) {
        getCategories()
            .then((categories: Array<Category>) => dispatch(getAllCategoryAction(categories)))
            .catch(console.error);
    }
}

export const updateCategoryAsync = (categoryId: number, fixedcategory: Category) => {
    return function (dispatch: any) {
        updateCategory(categoryId, fixedcategory)
            .then(() => dispatch(updateCategoryAction({ ...fixedcategory, id: categoryId })))
            .catch(console.error);
    }
}

export const deleteCategoryAsync = (categoryId: number) => {
    return function (dispatch: any) {
        deleteCategory(categoryId)
            .then(() => dispatch(deleteCategoryAction(categoryId)))
            .catch(console.error);
    }
}
