import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './TaskItem.css';
import {InstructorAuthContext,StudentAuthContext} from '../../shared/context/auth-context';

const TaskItem = props => {
    
    const student_auth = useContext(StudentAuthContext);
     const auth = useContext(InstructorAuthContext);
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
            <Modal 
                    show={showConfirmModal}
                    onCancel={cancelDeleteHandler}
                    header="Are you sure?" 
                    footerClass="task-item__modal-actions" 
                    footer={
                <React.Fragment>
                    <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                    <Button danger onClick={confirmDelteHandler}>DELETE</Button>
                </React.Fragment>
            }> 
                <p>Do you want to proceed and delete this task? Please note that it cannot be undone thereafter.</p>
            </Modal>
            <li className='task-item'>
                <Card className="task-item__content">
                    <div className="task-item__image">
                        <Link to="/instructor"><img src={props.image} alt={props.name} /></Link>
                    </div>
                    <div className="task-item__info">
                        {student_auth.isLoggedIn && <h3>Instructor Name : {props.name}</h3>}
                   
                       <br/> <h3>Editing Details : {props.description}</h3><br/>
                        <Link to={`/instructor/InstructorId/${props.id}/submissions`}><h3 className="totalsubmissions">{props.submission} {(props.submission===1)?'submission':'submissions'}</h3></Link>
                    </div>
                    <div className="task-item__actions">
                        {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>}
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default TaskItem;