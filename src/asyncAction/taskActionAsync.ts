import DB, { addTask, getTasks, deleteTask, updateTask } from '../database/db';
import { addTaskAction, getAllTasksAction, deleteTaskAction, updateCategory } from '../reducers/taskSlice';
import { Task } from '../interfaces';

export const addTaskAsync = (newItem: Task) => {
    return function (dispatch: any) {
        addTask(newItem)
            .then((newItemId: number) => dispatch(addTaskAction({...newItem, id: newItemId})))
            .catch(console.error);
    }
}

export const getAllTasksAsync = () => {
    return function (dispatch: any) {
        getTasks()
            .then((tasks: Array<Task>) => dispatch(getAllTasksAction(tasks)))
            .catch(console.error);
    }
}

export const updateTaskAsync = (taskId: number, fixedTask: Task) => {
    return function (dispatch: any) {
        updateTask(taskId, fixedTask)
            .then(() => dispatch(updateCategory({ ...fixedTask, id: taskId })))
            .catch(console.error);
    }
}

export const deleteTaskAsync = (taskId: number) => {
    return function (dispatch: any) {
        deleteTask(taskId)
            .then(() => dispatch(deleteTaskAction(taskId)))
            .catch(console.error);
    }
}
