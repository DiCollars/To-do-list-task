import DB,{ addItem, getItems } from '../database/db';
import { addTask, getAllTasks } from '../actions/taskActionV2';
import { Task } from '../actions/interfaces';

const db = DB();

export const addTaskDB = (newItem: Task) => {
    return function (dispatch: any) {
        addItem(db, newItem)
        .then((resolve:Task) =>  dispatch(addTask(newItem)))
        .catch(console.error);
    }
}

export const getAllTasksAsync = () => {
    return function (dispatch: any) {
        getItems(db)
        .then((tasks:Array<Task>) =>  dispatch(getAllTasks(tasks)))
        .catch(console.error);
    }
}