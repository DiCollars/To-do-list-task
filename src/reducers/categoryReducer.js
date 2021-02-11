import { categoryTable } from '../database/categories';

export default function CategoryReducer(state = categoryTable, action) {
    switch (action.type) {
        case 'DELETE_CATEGORY':
            return state.filter(el => el !== action.payload);
                default:
            return state;
    }
}