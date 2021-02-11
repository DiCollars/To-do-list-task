export const deleteTask = (text) => {
    return {
        type: 'DELETE_TASK',
        payload: text
    };
}