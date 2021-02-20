import { Action, Task } from './interfaces'

export enum TaskActionType {
    ADD_TASK = 'ADD_TASK',
    GET_ALL_TASKS = 'GET_ALL_TASKS',
    UPDATE_TASK = 'UPDATE_TASK',
    DELETE_TASK = 'DELETE_TASK'
}

export const addTaskAction = (newTask: Task): Action<TaskActionType, Task> => {
    return {
        type: TaskActionType.ADD_TASK,
        payload: newTask
    };
}

export const getAllTasksAction = (tasks: Array<Task>): Action<TaskActionType, Array<Task>> => {
    return {
        type: TaskActionType.GET_ALL_TASKS,
        payload: tasks
    };
}

export const updateCategory = (fixedTask: Task): Action<TaskActionType, Task> => {
    return {
        type: TaskActionType.UPDATE_TASK,
        payload: fixedTask
    };
}

export const deleteTaskAction = (taskid: number): Action<TaskActionType, number> => {
    return {
        type: TaskActionType.DELETE_TASK,
        payload: taskid
    };
}
