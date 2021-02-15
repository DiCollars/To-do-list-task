import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskAction';
import Modal from '../modalWindow/confirmModal';
import '../modalWindow/modal.css';

export default function TaskList() {
    const allTasks = useSelector((state: any) => state.Tasks);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [currentTask, setCurrentTask] = useState('');

    return (
        <div>
            {showModal &&
                <Modal
                    text={'Удаление задачи'}
                    onConfirmButtonClick={
                        () => {
                            dispatch(deleteTask(currentTask)); setShowModal(false);
                        }}
                    onCloseButtonClick={
                        () => setShowModal(false)
                    }
                    callBack={() => { }}
                    onCloseButtonStyle={'modal-confirm-no'}
                    onOpenButtonStyle={'modal-confirm-yes'}
                    textStyle={'modal-confirm-text'}
                />}

            <ol>
                {allTasks.map((task: any) => (
                    <li key={task}>{task} <button onClick={() => { setShowModal(true); setCurrentTask(task); }}>x</button></li>
                ))}
            </ol>
        </div>
    );
} 