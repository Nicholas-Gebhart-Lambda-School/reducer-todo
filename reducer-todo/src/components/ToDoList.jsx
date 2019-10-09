import React from 'react';

import ToDoItem from './ToDoItem';

export default ({ items, dispatch }) => {
  const clearItems = () => {
    dispatch({ type: 'REMOVE_COMPLETED' });
  };
  return (
    <main>
      {items.map(item => {
        return <ToDoItem key={item.id} item={item} dispatch={dispatch} />;
      })}
      <button onClick={clearItems}>Clear Completed Items</button>
    </main>
  );
};
