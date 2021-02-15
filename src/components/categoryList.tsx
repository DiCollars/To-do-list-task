import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCategory } from '../actions/categoryAction'
import Modal from '../modalWindow/confirmModal';

const CategoryList: React.FC = () => {
    const allCategories = useSelector((state: any) => state.Categories);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [currentCategory, setcurrentCategory] = useState('');

    return (
        <div>
             {showModal && 
            <Modal 
                text={'Удаление категории'}
                onConfirmButtonClick={
                () => {
                    dispatch(deleteCategory(currentCategory)); setShowModal(false);
                }} 
                onCloseButtonClick={
                    () => setShowModal(false)
                }
                callBack={()=>{}}
                onCloseButtonStyle={'modal-confirm-no'}
                onOpenButtonStyle={'modal-confirm-yes'}
                textStyle={'modal-confirm-text'}
                />}
            <ol>
                {allCategories.map((category: any) => (
                    <li key={category}>{category} <button onClick={() => {setShowModal(true); setcurrentCategory(category);}}>x</button></li>
                ))}
            </ol>
        </div>
    );
}

export default CategoryList;