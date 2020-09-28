import React from 'react';

import TaskItem from './TaskItem';

const Tasks = () => {
  const Task = [
    {
      id: 't1',
      name: 'Max Schwarz',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      submission:3,
      description:"Add pencil scetch effect"
    }
  ];

  return <TaskItem items={Task} />;
};

export default Tasks;
