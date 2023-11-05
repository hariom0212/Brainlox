import React from 'react';
import "../css/playground.css";
import { getAuth } from "firebase/auth";
import { BsFillPersonFill } from 'react-icons/bs';

function Playground() {

  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    var displayName = user.displayName;
  
  }
   

  return (
    <div>
       <h1 className='nav-item my-0 mx-4'><BsFillPersonFill/>welcome  {displayName}</h1>
    <div className='editor'>
      <div className='heading'>
        <h1>Start coding below</h1>
      </div>
      
      <div className='codingBg'>
        <img
          className='codeIt'
          src='/images/codenow.png'
          alt='codeit'
        />
      </div>

      <iframe
          style={{ "boxShadow": "0 0 20px 0px grey" }}
          width="80%"
          height="700px"
          src="https://trinket.io/embed/python3/dec984184b"
          title="code-editor"
        >         
        </iframe>
    </div>
    </div>
  )
}

export default Playground;