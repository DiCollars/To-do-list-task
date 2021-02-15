import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../modalWindow/muteModal';
import '../components/component.css'

export default function Header() {
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [showModalTask, setShowModalTask] = useState(false);

  const [mode, setMode] = useState((() => {
    const arTmp = window.location.pathname.split("/").filter(e => e);
    return arTmp.length ? arTmp[0] : null;
  })());

  return (
    <div>
      <div className='component-header'>
        <div>
          <h3 className={'text-white'}>ToDo List</h3>
        </div>
        <div>
          <NavLink onClick={() => setMode('categories')} to='/categories'> [categories] </NavLink>
        </div>
        <div>
          <NavLink onClick={() => setMode('tasks')} to='/tasks'> [tasks] </NavLink>
        </div>
        <div>
          {mode === 'categories' && <button onClick={() => setShowModalCategory(true)}>Add categories!</button>}
          {mode === 'tasks' && <button onClick={() => setShowModalTask(true)}>Add tasks!</button>}
        </div>
      </div>
      {showModalCategory &&
        <Modal text={'Создание категории'}
          onCloseButtonClick={() => setShowModalCategory(false)}
          onConfirmButtonClick={() => <div>1</div>}
          callBack={() => { }}
          confirmText={'Создать'}
          onCloseButtonStyle={'modal-mute-close'}
          onOpenButtonStyle={'modal-mute-create'}
          textStyle={'modal-confirm-text'}
        />}

      {showModalTask &&
        <Modal text={'Удаление категории'}
          onCloseButtonClick={() => setShowModalTask(false)}
          onConfirmButtonClick={() => <div>1</div>}
          callBack={() => { }}
          confirmText={'Создать'}
          onCloseButtonStyle={'modal-mute-close'}
          onOpenButtonStyle={'modal-mute-create'}
          textStyle={'modal-confirm-text'}
        />}

    </div>
  );
}