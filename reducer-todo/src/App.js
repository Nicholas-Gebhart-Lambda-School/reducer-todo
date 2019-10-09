import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/todoReducer';

import Form from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import './App.css';

export default () => {
  const [todoList, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Form dispatch={dispatch} />
      <ToDoList items={todoList.list} dispatch={dispatch} />
    </>
  );
};
