import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCategory } from '../actions/categoryAction'
import Modal from '../modalWindow/confirmModal';

function CategoryList() {
    const allCategories = useSelector(state => state.Categories);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [currentCategory, setcurrentCategory] = useState('');

    return (
        <div>
             {showModal && 
            <Modal 
                text={'Do you wanna delete this category?'}
                onConfirmButtonClick={
                () => {
                    dispatch(deleteCategory(currentCategory)); setShowModal(false);
                }} 
                onCloseButtonClick={
                    () => setShowModal(false)
                }/>}
            <ol>
                {allCategories.map(category => (
                    <li key={category}>{category} <button onClick={() => {setShowModal(true); setcurrentCategory(category);}}>x</button></li>
                ))}
            </ol>
        </div>
    );
}

export default CategoryList;