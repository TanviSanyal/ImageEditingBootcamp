import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './SubmissionItem.css';

const SubmissionItem = props => {
    

    const [showConfirmModal,setShowConfirmModal]=useState(false);



    return (
        <React.Fragment>
            <li className='task-item'>
                <Card className="task-item__content">
                    <div className="task-item__image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="task-item__info">
                   
                       <br/> <h3>Edited by : {props.title}</h3><br/>
                       <div>
                       <h3 >Score</h3>
                       <textarea/><h3> out of 100</h3><br/>
                       </div>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default SubmissionItem;