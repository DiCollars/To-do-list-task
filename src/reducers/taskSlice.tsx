import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task_slice',

    initialState: [{
        name: '',
        description: '',
        categoryId: '',
        id: 0
    }],

    reducers: {
        addTaskAction(state, action) {
            const tasks = [...state]; 
            tasks.push(action.payload);
            return tasks;
        },

        getAllTasksAction(state, action) {
            return action.payload;
        },
        
        updateCategory(state, action) {
            const tasksUpdate = [...state];

            const newtasksUpdate = tasksUpdate.map(task => {
                if (task.id === action.payload.id) {
                    
                    return action.payload;
                }

                return task;
            });

            return newtasksUpdate;
        },

        deleteTaskAction(state, action) {
            const newTasks = [...state].filter(category => category.id !== action.payload);

            return newTasks;
        }
    }
});

export const taskReducer = taskSlice.reducer;
export const {addTaskAction, getAllTasksAction, updateCategory, deleteTaskAction} = taskSlice.actions;