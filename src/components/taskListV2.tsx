import React, { useState, useEffect } from 'react';
import DB, { addItem, getItems, updateItem, deleteItem } from '../database/db';
import './component.css';
import { FaFolder } from 'react-icons/fa';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import Modal from '../modalWindow/confirmModal';
import '../modalWindow/modal.css';
import { deleteTask } from '../actions/taskActionV2';

export default function TaskList() {
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [currentTask, setCurrentTask] = useState(0);

    const db = DB();
    const [list, setList]: any = useState(null);
    let items = getItems(db);

    useEffect(() => {
        items = getItems(db);
        items.then(result => { setList(result) });
    }, [list]);

    return (
        <div key='TASK_LIST'>
            {showModal &&
            <Modal
                text={'Удаление задачи'}
                onConfirmButtonClick={() => {
                    dispatch(deleteTask(currentTask));
                    setShowModal(false);
                }}
                onCloseButtonClick={() => setShowModal(false)}
                callBack={() => { }}
                onCloseButtonStyle={'modal-confirm-no'}
                onOpenButtonStyle={'modal-confirm-yes'}
                textStyle={'modal-confirm-text'}
            />}
            {
                list && list.map((task: any) =>
                    <div>
                        <div>
                            {task.name}
                            {task.categoryId}
                            <FaFolder className='logo-img-path' />
                            <MdModeEdit className='logo-img-path' />
                            <MdDelete className='logo-img-path' onClick={() => { setShowModal(true); setCurrentTask(task.id); }} />
                        </div>

                        <div>
                            {task.description}
                        </div>
                        <hr className='logo-img-path' />
                    </div>)
            }
        </div>)

} 