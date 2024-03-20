// import './App.css';
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import { FilterProvider } from './contexts/FilterContext';

const App = () => {
  return (
    <FilterProvider>
      <AddTodo />
      <TodoList />
      <TodoFilter />
    </FilterProvider>
  );
};

export default App;
