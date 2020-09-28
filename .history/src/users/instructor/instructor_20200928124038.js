import React from 'react';
import './Instructor.css';
import Tasks from './Tasks';
import {useHistory} from 'react-router-dom';

const Instructor = () => {

    let history = useHistory();
    const routeChange = () => {
        let path = `/instructor/instructorId/addtask`;
        history.push(path);
    };

    return (
        <>
        <div id="add_task_btn_form" ><button onClick={routeChange}>Add Task</button>
        </div>
        <Tasks/>
        </>
    );
};

export default Instructor;