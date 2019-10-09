import React from 'react';

export default ({ item, dispatch }) => {
  const markComplete = () => {
    const h1 = document.getElementById(`${item.item}`);
    h1.classList.toggle('completed');
    console.log(item.id, item.completed);
    dispatch({ type: 'MARK_COMPLETED', payload: item.id });
  };

  return (
    <>
      <div>
        <h1 onClick={markComplete} id={item.item}>
          {item.item}
        </h1>
      </div>
    </>
  );
};
