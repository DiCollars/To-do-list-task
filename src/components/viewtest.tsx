import React, { useState, useEffect } from 'react';
import DB, { addCategory, addItem, getItems, getCategories, updateItem, updateCategory, deleteCategory, deleteItem } from '../database/db';

const db = DB();

export default function ViewTest() {
    const [list, setList]: any = useState(null);
    let items = getItems(db);

    useEffect(() => {
        items = getItems(db);
        items.then(result => { setList(result) });
    }, [list]);

    return (list && list.map((item: any) => <div key={item.id}>{item.name} - {item.description} - {item.categoryId}</div>));
}