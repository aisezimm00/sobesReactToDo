import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/todos/todosReducer';

const TodoFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.todos.filter);

  return (
    <div className="div-3">
      <button
        className={`button ${filter === 'all' ? 'active' : ''}`}
        onClick={() => dispatch(setFilter('all'))}
      >
        All Tasks
      </button>
      <button
        className={`button ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => dispatch(setFilter('completed'))}
      >
        Completed
      </button>
      <button
        className={`button ${filter === 'pending' ? 'active' : ''}`}
        onClick={() => dispatch(setFilter('pending'))}
      >
        Pending
      </button>
    </div>
  );
};

export default TodoFilters;
