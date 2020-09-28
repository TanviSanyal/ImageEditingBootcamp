import React from 'react';
import './Instructor.css';
import Tasks from './Tasks';
import Button from '../../shared/components/FormElements/Button';
import {useHistory} from 'react-router-dom';

const DUMMY_INSTRUCTOR = [
    {
      id: 'i1',
      name: 'Max',
      email:"max@xyz"
    }
  ];

const Instructor = () => {
    const instructorId=DUMMY_INSTRUCTOR.filter(ins => ins.id);
    let history = useHistory();
    const routeChange = () => {
        let path = `/instructor/instructorId/addtask`;
        history.push(path);
        
    };

    return (
        <>
        <div id="add_task_btn_form" ><button id="add_task_btn" onClick={routeChange}>Add Task</button>
        </div>
        <Tasks/>
        </>
    );
};

export default Instructor;