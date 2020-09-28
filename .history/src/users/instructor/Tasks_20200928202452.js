import React from 'react';

import TaskList from './TaskList';

const Tasks = () => {
  const Task = [
    {
      id: 't1',
      name: 'Max',
      image:https:'//www.omfif.org/wp-content/uploads/2020/03/random-shocks-newweb.jpg',
      submission:2,
      description:"Add pencil scetch effect",
      creator:"insid1"
    }
  ];

  return <TaskList items={Task} />;
};

export default Tasks;
