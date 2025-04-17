import React from 'react';

function TodoItem({ text, onDelete }) {
  return (
    <li>
      {text}
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
