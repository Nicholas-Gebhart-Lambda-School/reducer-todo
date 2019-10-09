export const initialState = {
  list: [
    {
      item: 'Clean the house',
      completed: false,
      id: Date.now()
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        list: [
          ...state.list,
          { item: action.payload, completed: false, id: Date.now() }
        ]
      };
    case 'REMOVE_COMPLETED':
      return {
        list: state.list.filter(item => !item.completed)
      };
    case 'MARK_COMPLETED':
      return {
        list: state.list.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        )
      };
    default:
      return state;
  }
};
