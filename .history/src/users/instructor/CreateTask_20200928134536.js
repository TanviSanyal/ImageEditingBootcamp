import React from 'react';
import {useHistory} from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_FILE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import './CreateTask.css';
import {useForm} from '../../shared/custom_hooks/form-hook';



const CreateTask = () => {
 const [formState,inputHandler]= useForm({
     
    description:{
      value:'',
      isValid:false
    },
    image:{
      value:'',
      isValid:false
    }
  },false
  );

let history=useHistory();

   const TaskSubmitHandler = event =>{
     event.preventDefault();
     console.log(formState.inputs);
     let path=`/instructor/instructorId`;
    history.push(path);
   };

   const fileSelectHandler = event => {
       console.log(event);
   };

  return (
    <form className="task-form" onSubmit={TaskSubmitHandler}>

    
    
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <input id className="image_file" type="file" onChange={fileSelectHandler} />
      <Button type="submit" disabled={!formState.isValid}>
        ADD TASK
      </Button>
    </form>
  );
};

export default CreateTask;
