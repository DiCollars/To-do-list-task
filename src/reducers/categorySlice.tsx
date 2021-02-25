import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category_slice',

    initialState: [{
        name: '',
        description: '',
        id: 0
    }],

    reducers: {
        addCategoryAction(state, action) {
            const categories = [...state]; 
            categories.push(action.payload);
            return categories;
        },

        getAllCategoryAction(state, action) {
            return action.payload;
        },
        
        updateCategoryAction(state, action) {
            const categoriesUpdate = [...state];

            const newcategoriesUpdate = categoriesUpdate.map(category => {
                if (category.id === action.payload.id) {
                    
                    return action.payload;
                }

                return category;
            });

            return newcategoriesUpdate;
        },

        deleteCategoryAction(state, action) {
            const newСategories = [...state].filter(category => category.id !== action.payload);

            return newСategories;
        }
    }
});

export const categoryReducer = categorySlice.reducer;
export const {addCategoryAction, getAllCategoryAction, updateCategoryAction, deleteCategoryAction} = categorySlice.actions;