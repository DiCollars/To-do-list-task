import React, { useEffect } from 'react';
import Header from './components/header';
import TaskList from './components/taskList';
import CategoryList from './components/categoryList';
import { Route, BrowserRouter, Switch, useLocation, withRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/categories" component={CategoryList} />
          <Route path="/tasks" component={TaskList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
} 

export default App;
