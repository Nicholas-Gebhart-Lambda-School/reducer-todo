import React, { useState } from 'react';

export default ({ dispatch }) => {
  const [item, setItem] = useState('');

  const inputChange = e => {
    setItem(e.target.value);
  };
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: item });
      }}
    >
      <label htmlFor="item">
        List Items
        <input type="text" name="item" value={item} onChange={inputChange} />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
};
