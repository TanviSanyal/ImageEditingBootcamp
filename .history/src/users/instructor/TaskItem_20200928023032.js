import React from 'react';
import { Link } from 'react-router-dom';

import TaskImage from '../../shared/components/UIElements/TakImage';
import Card from '../../shared/components/UIElements/Card';
import './TaskItem.css';

const TaskItem = props => {
    // const auth=useContext(AuthContext);

    // const [showMap, setShowMap] = useState(false);

    const [showConfirmModal,setShowConfirmModal]=useState(false);

    // const openMapHandler = () => {
    //     setShowMap(true);
    // };

    // const closeMapHandler = () => {
    //     setShowMap(false);
    // };

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
                    footerClass="place-item__modal-actions" 
                    footer={
                <React.Fragment>
                    <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                    <Button danger onClick={confirmDelteHandler}>DELETE</Button>
                </React.Fragment>
            }> 
                <p>Do you want to proceed and delete this task? Please note that it cannot be undone thereafter.</p>
            </Modal>
            <li className='place-item'>
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.name} />
                    </div>
                    <div className="place-item__info">
                        <h2>Instructor Name : {props.name}</h2>
                   
                        <p>{props.description}</p>
                        <h3>{props.submission} {(props.submission===1)?'submission':'submissions'}</h3>
                    </div>
                    <div className="place-item__actions">
                        <Button to={`/places/${props.id}`}>EDIT</Button>
                        <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default TaskItem;