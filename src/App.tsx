import React, { useEffect } from 'react';
import Header from './components/header';
import TaskListV2 from './components/taskListV2';
import CategoryListV2 from './components/categoryListV2';
import { Route, BrowserRouter, Switch, useLocation, withRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
