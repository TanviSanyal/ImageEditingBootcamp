import React from 'react';

import './Home.css'

const Home = () => {

  let history = useHistory();
    const instructorRouteChange = () => {
        let path = `/auth`;
        history.push(path);
        
    };
    const studentRouteChange = () => {
      let path = `/student`;
      history.push(path);
      
  };

    return(
        <>
        <div className="main-body">
        <p className="text1">Welcome to</p>
        <p className="text2"> Online Image Editing Bootcamp</p>
        {/* <form action="/auth">
        <input type ="submit" name ="submit" value="Instructor" id="instructor"  />
        </form>
        <form action="/studentauth">
        <input type ="sbmit" name ="submit" value="Student" id="student"  />
        </form> */}
        <div id="add_task_btn_form" ><button id="instructor" onClick={instructorRouteChange}>Instructor</button>
        </div>
        <div id="add_task_btn_form" ><button id="student" onClick={studentRouteChange}>Student</button>
        </div>
      </div>
      </>
    );
};

export default Home;