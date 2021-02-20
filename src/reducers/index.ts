import { combineReducers } from 'redux';
import CategoryReducer from './categoryReducer';
import TaskReducer from './taskReducer';

const allReducers = combineReducers({
    Categories: CategoryReducer,
    Tasks: TaskReducer
});

export default allReducers;
