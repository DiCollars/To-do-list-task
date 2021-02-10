import React from 'react';
import Header from './components/header';
import TaskList from './components/tasks-list';
import CategoryList from './components/categories-list';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <hr />
          <Route path="/categories" component={CategoryList} />
          <Route path="/tasks" component={TaskList} />
        </div>
      </BrowserRouter>
  );
}

export default App;
