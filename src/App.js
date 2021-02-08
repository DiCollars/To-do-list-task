import React from 'react';
import Header from './TodoListComponents/header';
import Tasks from './TodoListComponents/tasks';
import Categories from './TodoListComponents/categories';
import {Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      
      <Route path="/categories" component={Categories}/>
      <Route path="/tasks" component={Tasks}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
