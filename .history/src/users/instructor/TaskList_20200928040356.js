import React from 'react';
import TaskItem from './TaskItem';
import Card from '../../shared/components/UIElements/Card';
import './TaskList.css';

const TaskList = props => {
    if(props.items.length===0)
    {
        return (
                <div className="task-list center">
                    <Card>
                        <h2>No Task found.Maybe add one?</h2>
                    </Card>
                </div>
        );
    }
    return <ul className="task-list"> 
        {props.items.map(task => <TaskItem 
                                    key={task.id} 
                                    id={task.id} 
                                    image={task.image} 
                                    name={task.name}
                                    submission={task.submission} 
                                    description={task.description} 
                                    creatorId={task.creator}
                                    />)}
    </ul> 
    
};

export default TaskList;
