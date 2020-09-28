import React from 'react';
import './SubmissionList.css';
import Card from '../../shared/components/UIElements/Card';
import SubmissionItem from './SubmissionItem';
import Button from '../../shared/components/FormElements/Button';

const SubmissionList = props => {
    if(props.items.length===0)
    {
        return (
                <div className="submission-list center">
                    <Card>
                        <h2>No Submission found</h2>
                        <Button to='/instructor/InstructorId'>Back</Button>
                    </Card>
                </div>
        );
    }
    return <ul className="submission-list"> 
        {props.items.map(submission => <SubmissionItem
                                    key={submission.id} 
                                    id={submission.id} 
                                    title={submission.title} 
                                    image={submission.imageUrl}
                                    creatorId={submission.creator}
                                    />)}
    </ul> 
    
};

export default SubmissionList;