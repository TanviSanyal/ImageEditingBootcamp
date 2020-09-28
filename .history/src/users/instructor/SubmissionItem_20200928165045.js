import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './SubmissionItem.css';

const SubmissionItem = props => {
    

    const [showConfirmModal,setShowConfirmModal]=useState(false);


    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmDelteHandler = () => {
        setShowConfirmModal(false);
        console.log('DELETING...');
    };

    return (
        <React.Fragment>
            <li className='task-item'>
                <Card className="task-item__content">
                    <div className="task-item__image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="task-item__info">
                        {/* <h3>Instructor Name : {props.name}</h3> */}
                   
                       <br/> <h3>Edited by : {props.title}</h3><br/>
                       <h3>Score</h3><br/>
                       <textarea/><h3>: 100</h3><br/>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default SubmissionItem;