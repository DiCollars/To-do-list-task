import { Action, Category } from '../actions/interfaces';
import { CategoryActionType } from '../actions/categoryAction';

export default function CategoryReducer(state: Array<Category> = [], action: Action<CategoryActionType, any>): Array<Category> {

    switch (action.type) {
        case CategoryActionType.ADD_CATEGORY:
            const categories = [...state]; 
            categories.push(action.payload);

            return categories;

        case CategoryActionType.GET_ALL_CATEGORY:

            return action.payload;

        case CategoryActionType.UPDATE_CATEGORY:
            const categoriesUpdate = [...state];

            const newcategoriesUpdate = categoriesUpdate.map(category => {
                if (category.id === action.payload.id) {
                    
                    return action.payload;
                }

                return category;
            });

            return newcategoriesUpdate;

        case CategoryActionType.DELETE_CATEGORY:
            const newСategories = [...state].filter(category => category.id !== action.payload);

            return newСategories;
            
        default:

            return state;
    }
}
