import { combineReducers } from 'redux';
import CategoryReducerV2 from './categoryReducerV2';
import TaskReducerV2 from './taskReducerV2';

const allReducers = combineReducers({
    Categoriesv2: CategoryReducerV2,
    TasksV2: TaskReducerV2
});

export default allReducers;
