import React, { useState, useEffect } from 'react';
import DB, { addCategory, getCategories } from '../database/db';
import './component.css';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import ConfirmModal from '../modalWindow/confirmModal';
import UpdateModal from '../modalWindow/cuCategoryModal';
import '../modalWindow/modal.css';
import { deleteCategory, updateCategory } from '../actions/categoryActionV2';

export default function CategoryListV2() {
    const dispatch = useDispatch();

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [currentCategoryId, setCurrentCategoryId] = useState(0);
    const [currentCategory, setCurrentCategory] = useState({name: '', description: '', id: 0});

    const db = DB();
    const [categoryList, setcategoryList]: any = useState(null);
    let items = getCategories(db);

    useEffect(() => {
        items = getCategories(db);
        items.then(result => { setcategoryList(result) });
    }, [categoryList]);

    return (
        <div key='CATEGORY_LIST'>
            {showDeleteModal &&
                <ConfirmModal
                    text={'Удаление категории'}
                    onConfirmButtonClick={() => {
                        dispatch(deleteCategory(currentCategoryId));
                        setShowDeleteModal(false);
                    }}
                    onCloseButtonClick={() => setShowDeleteModal(false)}
                    callBack={() => { }}
                    onCloseButtonStyle={'modal-confirm-no'}
                    onOpenButtonStyle={'modal-confirm-yes'}
                    textStyle={'modal-confirm-text'}
                />}

            {showUpdateModal &&
                <UpdateModal
                placeholderDescription={currentCategory.description}
                placeholderName={currentCategory.name}
                handleSubmit={(values: any) => {
                    setShowUpdateModal(false)
                    dispatch(updateCategory({name: values.name, description: values.description, id: currentCategory.id}))}}
                onCloseButtonClick={() => setShowUpdateModal(false)}
                onConfirmButtonClick={() => { }}
                headText={'Редактирование категории'}
                submitButtonText={'Сохранить'}
            />}

            {
                categoryList && categoryList.map((category: any) =>
                    <div>
                        <div>
                            {category.name}
                            <MdModeEdit className='logo-img-path' onClick={() => { setShowUpdateModal(true); setCurrentCategory(category); console.log(category)}}/>
                            <MdDelete className='logo-img-path' onClick={() => { setShowDeleteModal(true); setCurrentCategoryId(category.id); }} />
                        </div>

                        <div>
                            {category.description}
                        </div>
                        <hr className='logo-img-path' />
                    </div>)
            }
        </div>)

} 