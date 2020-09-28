import React from 'react';
import {useParams} from 'react-router-dom';
import './Submissions.css';
import Button from '../../shared/components/FormElements/Button';
import SubmissionList from './SubmissionList';



const DUMMY_SUBMISSIONS=[
    {
    id:"s1",
    title : "Tanvi Sanyal",
    taskid :"t1",
    imageUrl : "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Victoria-Memorial_600-1280x720.jpg",
    creator :"st1"
},
{
    id:"s2",
    title : "Tanvi Sanyal",
    imageUrl : "https://assets.telegraphindia.com/telegraph/05648444-7dc7-4c71-9a25-656e98a6a0a0.jpg",
    taskid :"t1",
    creator :"st2"}
];

const Submissions = props => {
    const taskId=useParams().taskId;
    const loadedsubmission=DUMMY_SUBMISSIONS.filter(submission => submission.taskid===taskId);
    return(
    <>
    <div className="back-button"><Button to="/instructor/instructorId">Back</Button></div>
    <SubmissionList items={loadedsubmission}/></>
    )
};

export default Submissions;