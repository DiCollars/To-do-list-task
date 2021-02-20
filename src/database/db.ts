import Dexie from 'dexie';

const todoDB = () => {
    const db = new Dexie('todolistdb');
    db.version(2).stores({
        tasks: '++id, name, description, categoryId',
        categories: '++id, name, description',
    });

    db.open();
    return db;
}

export const addTask = (db: any, data: any) => {
    return db.tasks.bulkAdd([data]);
}

export const addCategory = (db: any, data: any) => {
    return db.categories.bulkAdd([data]);
}

export async function getTasks(db: any) {
    return await db.tasks.toArray();
}

export const getCategories = async(db: any) => {
    return await db.categories.toArray();
}

export async function updateTask(db: any, id: number, obj: any) {
    await db.tasks.update(id, obj);
}

export async function updateCategory(db: any, id: number, obj: any) {
    await db.categories.update(id, obj);
}

export async function deleteTask(db: any, id: number) {
    await db.tasks.delete(id);
}

export async function deleteCategory(db: any, id: number) {
    await db.categories.delete(id);
}

export default todoDB;
