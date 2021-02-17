import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Modal from '../modalWindow/muteModal';
import '../components/component.css';
import AddCategoryModal from '../modalWindow/cuCategoryModal';
import AddTaskModal from '../modalWindow/cuTaskModal';
import { addCategory } from '../actions/categoryActionV2';
import { addTask } from '../actions/taskActionV2';

export default function Header() {
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [showModalTask, setShowModalTask] = useState(false);

  const [mode, setMode] = useState((() => {
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
          handleSubmit={(values: any) => {dispatch(addCategory({name: values.name, description: values.description}))}}
          onCloseButtonClick={() => setShowModalCategory(false)}
          onConfirmButtonClick={() => { }}
          headText={'Создание категории'}
          submitButtonText={'Создать'}
          placeholderDescription={''}
          placeholderName={''}
        />}

      {showModalTask &&
        <AddTaskModal 
        handleSubmit={(values: any) => {dispatch(addTask({name: values.name, description: values.description, categoryId: values.id}))}}
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