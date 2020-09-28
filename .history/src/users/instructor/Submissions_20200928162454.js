import React from 'react';
import {useHistory} from 'react-router-dom';
import {saveAs} from 'file-saver';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card'
import {
  VALIDATOR_FILE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import {useForm} from '../../shared/custom_hooks/form-hook';



const DUMMY_SUBMISSIONS=[
    {
    id:"s1",
    name : "Tanvi Sanyal",
    taskid :"t1",
    imageUrl : "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Victoria-Memorial_600-1280x720.jpg",
    creator :"st1"
},
{
    id:"s2",
    title : "Tanvi sanyal",
    imageUrl : "https://assets.telegraphindia.com/telegraph/05648444-7dc7-4c71-9a25-656e98a6a0a0.jpg",
    taskid :"t1",
    creator :"st2"}
];

const Submissions = props => {
    const taskId=useParams().taskId;
    const loadedsubmission=DUMMY_Submissions.filter(submission => submission.taskid===taskId);
    return <submissionList items={loadedsubmission}/>
};

export default Submissions;