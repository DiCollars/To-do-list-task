import Dexie from 'dexie';

//to use
//import DB, { addCategory, addItem, getItems, getCategories, updateItem,  updateCategory, deleteCategory, deleteItem} from '../database/dbtest';

//let db = DB();

const todoDB = () => {
    const db = new Dexie('todolistdb');
    db.version(1).stores({
        items: '++id, name, description, categoryId',
        categories: '++id, name, description',
    });

    db.open();
    return db;
}

// addCategory(db, 
//     {
//         name: 'Boom',
//         description: 'Lets boom it'
//     });

// addItem(db, 
//     {
//         name: 'Boom',
//         description: 'Lets boom it',
//         categoryId: 1
//     });

//*********************************[To add 1 item]*********************************//
export const addItem = (db: any, data: any) => {
    db.items.bulkAdd([data]);
}

//*********************************[To add 1 category]*********************************//
export const addCategory = (db: any, data: any) => {
    db.categories.bulkAdd([data]);
}

//*********************************[To get all items]*********************************//
export async function getItems(db: any) {
    const array = await db.items.toArray();
    return array;
}

//*********************************[To get all categories]*********************************//
export const getCategories = async(db: any) => {
    return await db.categories.toArray();
}

//*********************************[To update chosen item]*********************************//
export function updateItem(db: any, id: number, obj: any) {
    db.items.update(id, obj).then(console.log('updated.'));
}

//*********************************[To update chosen category]*********************************//
export function updateCategory(db: any, id: number, obj: any) {
    db.categories.update(id, obj).then(console.log('updated.'));
}

//*********************************[To delete chosen item]*********************************//
export function deleteItem(db: any, id: number) {
    db.items.delete(id).then(console.log('deleted.'));
}

//*********************************[To delete chosen category]*********************************//
export function deleteCategory(db: any, id: number) {
    db.categories.delete(id).then(console.log('deleted.'));
}

export default todoDB;