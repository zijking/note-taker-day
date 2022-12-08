import React from 'react';
import './ListView.module.css';

function ListView({ dataShow, onDelete }) {
  return (
    <ul>
      {dataShow.map(item => {
        return (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.nick}</span>
            <span>{item.email}</span>
            <span>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default ListView;
