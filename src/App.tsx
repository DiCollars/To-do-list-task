import React, { useEffect } from 'react';
import Header from './components/header';
import TaskList from './components/taskList';
import CategoryList from './components/categoryList';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllTasksAsync } from './asyncAction/taskActionAsync';
import { getAllCategoriesAsync } from './asyncAction/categoryActionAsync';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasksAsync());
    dispatch(getAllCategoriesAsync());
  }, []);

  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/categories" component={CategoryList} />
          <Route path="/tasks" component={TaskList} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
