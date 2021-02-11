export const deleteCategory = (text) => {
    return {
        type: 'DELETE_CATEGORY',
        payload: text
    };
}