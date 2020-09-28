import React from 'react';
import './Instructor.css';
import Tasks from './Tasks';
import Button from '../../shared/components/FormElements/Button';

const Instructor = () => {
    return (
        <>
        <div id="add_task_btn_form" ><Button to="/addtask">Add Task</Button>
        
        </div>
        <Tasks/>
        </>
    );
};

export default Instructor;