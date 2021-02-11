import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskAction';
import Modal from '../modalWindow/confirmModal';

export default function TaskList() {
    const allTasks = useSelector(state => state.Tasks);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [currentTask, setCurrentTask] = useState('');

    return (
        <div>
            {showModal && 
            <Modal 
                text={'Do you wanna delete this task?'}
                onConfirmButtonClick={
                () => {
                    dispatch(deleteTask(currentTask)); setShowModal(false);
                }} 
                onCloseButtonClick={
                    () => setShowModal(false)
                }/>}
            <ol>
                {allTasks.map(task => (
                    <li key={task}>{task} <button onClick={() => {setShowModal(true); setCurrentTask(task);}}>x</button></li>
                ))}
            </ol>
        </div>
    );
} 