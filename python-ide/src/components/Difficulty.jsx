import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

import Swal from 'sweetalert2'
import "../css/difficulty.css";
import CourseCard from './CourseCard';
import axios from 'axios';
import { getAuth } from "firebase/auth";
import { BsFillPersonFill } from 'react-icons/bs';
  
export default function Difficulty({ ptype }) {
  
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (ptype === "problems") {
      axios({
        method: "GET",
        withCredentials: true,
        url: "https://cryptic-crag-63552.herokuapp.com/python/problems"
      }).then((res) => {
        setRows(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
    else {
      axios({
        method: "GET",
        withCredentials: true,
        url: "https://cryptic-crag-63552.herokuapp.com/python/workshops"
      }).then((res) => {
        setRows(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }

  }, [ptype])

  
const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  var displayName = user.displayName;

}

  
  return (
    <div>
       <h1 className='nav-item my-0 mx-4'><BsFillPersonFill/>welcome  {displayName}</h1>
       <h1 className="text-center my-4" style={{fontFamily: " cursive" }}>{ptype === "problems" ? <>Practice Set</> : <>Workshop</>}
          </h1>
    
    <div className = "difficulty" >
      
      <div className="diff-heading">
        <div className='two-side'>
        </div>

        <div className='two-side learn-bg'>
          <img
            src={ ptype === "problems"? '/images/learnBg.png': '/images/learnBg2.png'}
            alt='learn-bg'
          />
        </div>
        
        <div className='dev'>
          <img 
            className='dev-img'
            src='/images/dev.png'
            alt='developer'
          />
        </div>
      </div>
        
      <div className='course-cards'>
          {rows.map((row,_i) => (            
              <div key={_i} onClick = {()=>{
                if (row.status === "Unlocked")
                  ptype === "problems" ?
                    navigate("/idePage", { state: { ideType: "problem", title: row.title } }) :
                    navigate("/idePage", { state: { ideType: "workshop", title: row.title } });
            
                else Swal.fire({
                  position: 'center',
                  icon: 'warning',
                  title: 'This content is locked.Please contact <a href = "mailto: support@brainlox.com" > support </a>   to Unlock this content for you',
                  showConfirmButton: false,
                  timer: 2200
                });
              }}>
                <CourseCard 
                  title={row.title}
                  difficulty={row.difficulty}
                  status={row.status}
                />
              </div>
          ))}
      </div>
      
    </div>
    </div>
  )
}