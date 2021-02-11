import { combineReducers } from 'redux';
import CategoryReducer from '../reducers/categoryReducer';
import TaskReducer from '../reducers/taskReducer';

const allReducers = combineReducers({
    Categories: CategoryReducer,
    Tasks: TaskReducer
});

export default allReducers;