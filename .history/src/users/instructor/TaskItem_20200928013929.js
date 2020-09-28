import React from 'react';
import { Link } from 'react-router-dom';

import TaskImage from '../../shared/components/UIElements/TakImage';
import Card from '../../shared/components/UIElements/Card';
import './TaskItem.css';

const TaskItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/tasksubmissions`}>
          <div className="user-item__image">
            <TaskImage image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.submission} {props.submission === 1 ? 'submission' : 'submissions'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default TaskItem;