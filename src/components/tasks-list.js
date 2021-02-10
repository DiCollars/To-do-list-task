import React from 'react';

const taskList = ['To buy milk', 'To go for a walk', 'To clean teeth'];

export default function TaskList() {
  return (
    <div>
      <ol>
        {taskList.map(task => (
          <li>{task}</li>
        ))}
      </ol>
    </div>
  );
}