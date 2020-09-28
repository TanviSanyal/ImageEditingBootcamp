import React from 'react';
import {useHistory} from 'react-router-dom';
import {saveAs} from 'file-saver';
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
    let imagepath=event.files[0].image.value;
    let fileName=getFileName(imagepath);
    saveAs(imagepath,fileName);
   };

   const getFileName = (str) => {
       return str.substring(str.lastindexof('/')+1);
   };

   const fileSelectHandler = event => {
       console.log(event.files[0].image.value);
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
        type="file"
        label="Image"
        validators={[VALIDATOR_FILE()]}
        errorText="Please insert an image."
        onInput={inputHandler}
        onChange={fileSelectHandler}
      />
     {/* <div className="image_file"> <input  type="file" onChange={fileSelectHandler} /></div> */}
     {/* <img src={props.image} alt={props.name} /> */}
      <Button type="submit" disabled={!formState.isValid} >
        ADD TASK
      </Button>
    </form>
  );
};

export default CreateTask;
