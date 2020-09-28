import React from 'react';

import TaskList from './TaskList';

const Tasks = () => {
  const Task = [
    {
      id: 't1',
      name: 'Max',
      image:'https://www.omfif.org/wp-content/uploads/2020/03/random-shocks-newweb.jpg',
      submission:2,
      description:"Add pencil scetch effect",
      creator:"insid1"
    },
    {
      id: 't2',
      name: 'Max',
      image:'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
      submission:3,
      description:"Add pencil scetch effect",
      creator:"insid2"
    }
  ];

  return <TaskList items={Task} />;
};

export default Tasks;
