import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import Modal from '../modalWindow/muteModal';
import '../components/component.css';
import AddCategoryModal from '../modalWindow/cuCategoryModal';
import AddTaskModal from '../modalWindow/cuTaskModal';
import { addCategory } from '../actions/categoryActionV2';
import { addTask } from '../actions/taskActionV2';
import { Task, Category } from '../actions/interfaces';

export default function Header() {
  const [showModalCategory, setShowModalCategory] = useState<boolean>(false);
  const [showModalTask, setShowModalTask] = useState<boolean>(false);

  const [mode, setMode] = useState<string|null>((() => {
    const arTmp = window.location.pathname.split("/").filter(e => e);
    return arTmp.length ? arTmp[0] : null;
  })());

  const dispatch = useDispatch();

  return (
    <div>
      <div className='component-header'>
        <div>
          <h3 className={'text-white'}>ToDo List</h3>
        </div>
        <div>
          <NavLink onClick={() => setMode('categories')} to='/categories'> Категории </NavLink>
          | <NavLink onClick={() => setMode('tasks')} to='/tasks'> Задания </NavLink>
        </div>
        <div>
          {mode === 'categories' && <button onClick={() => setShowModalCategory(true)}>Добавить категорию</button>}
          {mode === 'tasks' && <button onClick={() => setShowModalTask(true)}>Добавить задачу</button>}
        </div>
      </div>
      {showModalCategory &&
        <AddCategoryModal
          handleSubmit={(category: Category) => {dispatch(addCategory(category))}}
          onCloseButtonClick={() => setShowModalCategory(false)}
          onConfirmButtonClick={() => { }}
          headText={'Создание категории'}
          submitButtonText={'Создать'}
          placeholderDescription={''}
          placeholderName={''}
        />}

      {showModalTask &&
        <AddTaskModal 
        handleSubmit={(task: Task) => { dispatch(addTask(task))}}
        onCloseButtonClick={() => setShowModalTask(false)}
        onConfirmButtonClick={() => { }}
        headText={'Создание задания'}
        submitButtonText={'Создать'}
        placeholderDescription={''}
        placeholderName={''}
        />}

    </div>
  );
}