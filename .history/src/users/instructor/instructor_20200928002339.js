import React from 'react';
import './Instructor.css';

const Instructor = () => {
    return (
        <form id="add_task_btn_form" action="/addtask"><button id="add_task_btn" className="add_task">Add Task</button></form>
    );
};

export default Instructor;