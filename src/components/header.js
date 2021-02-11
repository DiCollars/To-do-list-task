import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [mode, setMode] = useState((() => {
    const arTmp = window.location.pathname.split("/").filter(e => e);
    return arTmp.length ? arTmp[0] : null;
  })() );
  return (
    <div>
      <NavLink onClick={() => setMode('categories')} to='/categories'> [categories] </NavLink>
      <NavLink onClick={() => setMode('tasks')} to='/tasks'> [tasks] </NavLink>

      {mode === 'categories' && <button>Add categories!</button>}
      {mode === 'tasks' && <button>Add tasks!</button>}
    </div>
  );
}