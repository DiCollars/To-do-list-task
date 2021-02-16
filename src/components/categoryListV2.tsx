import React, { useState, useEffect } from 'react';
import DB, { addCategory, getCategories, updateCategory, deleteCategory } from '../database/db';
import './component.css';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../modalWindow/confirmModal';
import '../modalWindow/modal.css';
import { deleteCategory as deleteCategoryAction } from '../actions/categoryActionV2';

export default function CategoryListV2() {
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [currentTask, setCurrentTask] = useState(0);

    const db = DB();
    const [list, setList]: any = useState(null);
    let items = getCategories(db);

    useEffect(() => {
        items = getCategories(db);
        items.then(result => { setList(result) });
    }, [list]);



    return (
        <div key= 'CATEGORY_LIST'>
            {showModal &&
            <Modal
                text={'Удаление категории'}
                onConfirmButtonClick={() => {
                    dispatch(deleteCategoryAction(currentTask));
                    setShowModal(false);
                }}
                onCloseButtonClick={() => setShowModal(false)}
                callBack={() => { }}
                onCloseButtonStyle={'modal-confirm-no'}
                onOpenButtonStyle={'modal-confirm-yes'}
                textStyle={'modal-confirm-text'}
            />}
            {
                list && list.map((category: any) =>
                    <div>
                        <div>
                            {category.name}
                            {category.categoryId}
                            <MdModeEdit className='logo-img-path' />
                            <MdDelete className='logo-img-path' onClick={() => { setShowModal(true); setCurrentTask(category.id); }} />
                        </div>

                        <div>
                            {category.description}
                        </div>
                        <hr className='logo-img-path' />
                    </div>)
            }
        </div>)

} 