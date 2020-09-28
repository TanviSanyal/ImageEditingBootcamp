import React from 'react';
import './Instructor.css';
import Tasks from './Tasks';

const Instructor = () => {
    return (
        <>
        <form id="add_task_btn_form" action="/addtask"><button id="add_task_btn" className="add_task">Add Task</button></form>
        <Tasks/>
        </>
    );
};

export default Instructor;