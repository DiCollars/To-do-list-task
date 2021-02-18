import React, { useEffect } from 'react';
import Header from './components/header';
import TaskListV2 from './components/taskListV2';
import CategoryListV2 from './components/categoryListV2';
import { Route, BrowserRouter, Switch, useLocation, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllTasksAsync } from './asyncAction/taskActionAsync';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasksAsync());
  }, []);


  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/categories" component={CategoryListV2} />
          <Route path="/tasks" component={TaskListV2} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
