import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './SubmissionItem.css';

const SubmissionItem = props => {
    

    const [name,setName]=useState("");
    const [score,totalScore]=useState();
    
    const updateScore = (event) => {
        setName(event.target.value);
    };
    const setScore = () => {
        totalScore(name);
    };


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
                       <input type="text" onChange={setScore} placeholder="enter score" value={name}/>
                       <label>{score}</label>
                       <label> out of 100</label><br/>
                       </div>
                       <Button onClick={updateScore}>Update Score</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default SubmissionItem;