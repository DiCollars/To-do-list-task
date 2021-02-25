import Dexie from 'dexie';

interface Tables {
    tasks: any;
    categories: any;
}

const todoDB = () => {
    const db = new Dexie('todolistdb');
    db.version(2).stores({
        tasks: '++id, name, description, categoryId',
        categories: '++id, name, description',
    });

    db.open();
    return db;
}

export const addTask = (data: any) => {
    const db:any = todoDB();
    return db.tasks.bulkAdd([data]);
}

export const addCategory = (data: any) => {
    const db:any = todoDB();
    return db.categories.bulkAdd([data]);
}

export async function getTasks() {
    const db:any = todoDB();
    return await db.tasks.toArray();
}

export const getCategories = async() => {
    const db:any = todoDB();
    return await db.categories.toArray();
}

export async function updateTask(id: number, obj: any) {
    const db:any = todoDB();
    await db.tasks.update(id, obj);
}

export async function updateCategory(id: number, obj: any) {
    const db:any = todoDB();
    await db.categories.update(id, obj);
}

export async function deleteTask(id: number) {
    const db:any = todoDB();
    await db.tasks.delete(id);
}

export async function deleteCategory(id: number) {
    const db:any = todoDB();
    await db.categories.delete(id);
}

export default todoDB;
