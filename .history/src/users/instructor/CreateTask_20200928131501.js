import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_FILE,
  VALIDATOR_MINLENGTH
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

  

   const TaskSubmitHandler = event =>{
     event.preventDefault();
     console.log(formState.inputs);
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
      <Input
        id="image"
        element="input"
        label="image"
        validators={[VALIDATOR_FILE()]}
        errorText="Please enter a valid image."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD TASK
      </Button>
    </form>
  );
};

export default CreateTask;
