import React, { useState, useEffect } from 'react';
import DB, { addItem, getItems, updateItem, deleteItem, getCategories } from '../database/db';
import './component.css';
import { FaFolder } from 'react-icons/fa';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modalWindow/confirmModal';
import '../modalWindow/modal.css';
import { deleteTask } from '../actions/taskActionV2';
import { State, Task } from '../actions/interfaces';

import { addTaskDB } from '../asyncAction/taskActionAsync';

export default function TaskList() {
    const dispatch = useDispatch();

    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [currentTask, setCurrentTask] = useState<number|undefined>(0);
    
    let allTasks = useSelector((state: State) => state.TasksV2);

    return (
        <div key='TASK_LIST'>
            {/* {showModal &&
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
                />} */}

            <button onClick={() => {dispatch(addTaskDB({name: "Tест", description: "Тест", categoryId: "96"}))}}>B</button>

            {
                allTasks.map((task: Task) =>
                    <div key={task.id}>
                        <div>
                            {task.name}

                            {task.categoryId && <FaFolder className='logo-img-path' />}
                            {task.categoryId}
                            <MdModeEdit className='logo-img-path' />
                            <MdDelete className='logo-img-path' onClick={() => { setShowDeleteModal(true); setCurrentTask(task.id); }} />
                        </div>

                        <div>
                            {task.description}
                        </div>
                        <hr className='logo-img-path' />
                    </div>)
            }
        </div>)

} 