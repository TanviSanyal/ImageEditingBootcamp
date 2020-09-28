import React from 'react';

import TaskList from './TaskList';

const Tasks = () => {
  const Task = [
    {
      id: 't1',
      name: 'Max Schwarz',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      submission:3,
      description:"Add pencil scetch effect",
      creator:"insid1"
    }
  ];

  return <TaskList items={Task} />;
};

export default Tasks;
