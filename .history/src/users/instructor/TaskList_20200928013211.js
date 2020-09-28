import React from 'react';

import TaskItem from './TaskItem';
import Card from '../../shared/components/UIElements/Card';
import './TaskList.css';

const TaskList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No task found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(task => (
        <TaskItem
          key={task.id}
          id={task.id}
          image={task.image}
          name={task.name}
          submission={task.submission}
          description={task.description}
        />
      ))}
    </ul>
  );
};

export default TaskList;
