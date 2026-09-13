import React from 'react';

function Todo({todo, onComplete, onDelete}) {
  return (
    <>
    <div className="my-3">
      <h4 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </h4>
      <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.desc}
      </p>
      {!todo.completed && (
        <button className="btn btn-sm btn-primary" onClick={() => {onComplete(todo)}}>
          Mark as Complete
        </button>
      )}
      {todo.completed && (
        <button className="btn btn-sm btn-success" disabled>
          Completed
        </button>
      )}
      <button className={  todo.completed ? "btn btn-sm btn-danger ms-2" : "btn btn-sm btn-danger ms-2" } onClick={() => {onDelete(todo)}}>
        Delete
      </button>
    </div><hr/></>
  );
}

export default Todo;