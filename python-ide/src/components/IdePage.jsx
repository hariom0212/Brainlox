/* eslint-disable no-useless-escape */
import React, { useState ,useEffect} from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { useLocation } from "react-router-dom";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "../css/idepage.css";
import Swal from "sweetalert2";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function IdePage() {
  
  const location = useLocation();
  const [problems, setProblems] = useState([
    {
      title: "",
      description: ``,
      input: "",
      output: ``,
      sol: ``,
    }
  ]);

  const [q, setQ] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state.ideType === "problem") {
      axios({
        method: "GET",
        withCredentials: true,
        url: "https://cryptic-crag-63552.herokuapp.com/python/idepage?ideType=problem&title="+location.state.title,
      }).then((res) => {
        setProblems(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
    else {
      axios({
        method: "GET",
        withCredentials: true,
        url: "https://cryptic-crag-63552.herokuapp.com/python/idepage?ideType=workshop&title="+location.state.title,
      }).then((res) => {
        setProblems(res.data);
      }).catch((err) => {
        console.log(err);
      })
    }
}, [location.state.ideType, location.state.title])

  // for horizontal steps list
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [viewSol, setViewSol] = useState(false);
  
  const totalSteps = () => {
    return problems.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    setQ(step);
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? problems.findIndex((_step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    if (allStepsCompleted()) {
      Swal.fire({
        icon: 'success',
        title: 'All steps completed - you&apos;re finished',
        showConfirmButton: false,
        timer: 2000
      });
      setQ(problems.length-1);
    }
    else
      setQ(newActiveStep);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setQ(activeStep-1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
 
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setQ(0);
  };
  
  const toggleSol = () => {
    if (!viewSol)
      Swal.fire({
        icon: 'question',
        title: 'Do you want to see the solution?',
        showCancelButton: true,
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          setViewSol(true);
        }
      })
    else
      setViewSol(false);
  }

  const [openS, setOpenS] = useState(false);

  return (
    <div className="IdePage">
      <Snackbar
        open={openS}
        autoHideDuration={2000}
        onClose={() => {
          setOpenS(false);
        }}
        message="Code Copied"
      />

      <Box sx={{ width: '100%', padding:'30px' }}>
        <Stepper nonLinear activeStep={activeStep}>
          {problems.map((p, index) => {          
            return (
              <Step key={p.title} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                </StepButton>
              </Step>
            );
          })}
        </Stepper>

      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button variant="outlined" onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                variant="outlined"      
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                <ArrowBackIosIcon /> Previous Program 
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button variant="outlined" color="success" onClick={handleNext}>
                Next Program <NavigateNextIcon />
              </Button>
              {activeStep !== problems.length &&
                (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: '15px',
                        fontWeight: 'bold',
                        marginLeft: '10px',
                        border: '1px solid',
                        padding: '2px',
                        borderRadius: '5px'
                      }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                    <Button variant="outlined" onClick={handleComplete} sx={{marginLeft: '10px'}}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : null }
                  </Button>
                ))}
                <button variant="outlined" onClick={() => navigate(-1)} sx={{marginLeft: '10px'}} style={{ marginLeft: '10px',  border: '1px solid',  borderRadius: '5px'}}>Back</button>
            </Box>
          </React.Fragment>
        )}
      </div>
      </Box>

      <div className="ide-main">
        <div className="Prob">
          <div className="tab_btn_cont">
            <h5 className="tab_btn">
            {problems[q].title}
            </h5>
          </div>
          
          <div className="about">
            <h6 className="probDescription">
                {" "}
                {problems[q].description.split(/\r?\n/).map((r) => (
                  <>
                    {r}
                    <br />
                  </>
                ))}{" "}
            </h6>
            
            {problems[q].input.length > 0 ? (
              <h6>
                <h6 className="inpOut">INPUT:</h6>
                <h6 className="inpOutText">{problems[q].input.split(/\r?\n/).map((e, _i) => (
                  <>
                    {e}
                    <br></br>
                  </>
                ))}</h6>{" "}
              </h6>
            ) : null}
            {problems[q].output.length > 0 ? (
                  <>
                    <h6 className="inpOut">OUTPUT:</h6>
                    <h6 className="inpOutText">
                      {problems[q].output.split(/\r?\n/).map((r) => (
                  <>
                    {r}
                    <br />
                  </>
                ))}
                    </h6>{" "}
                  </>
            ) : null}

          </div>
        </div>
        
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", margin: "0 auto" }}>
          <iframe
            style={{ boxShadow: "0 0 20px 0px grey"}}
            frameborder="0"
            width="700px"
            height="700px"
            src="https://trinket.io/embed/python3/dec984184b"
            title="code-editor"
          >         
          </iframe>
        </div>
        

        <div className="Prob">
          <div className="tab_btn_cnt">
            <h5 className="tab_btn">
              Solution 
              {/* <Button
                  style={{ color: "#221638" }}
                  onClick={toggleSol}
              > */}
                {viewSol ?
                  <LockOpenTwoToneIcon /> :
                  <LockIcon />
                }
              {/* </Button> */}
                
            </h5>
          </div>
        
          <div
            style={{
              textAlign: "left",
              fontSize: "1rem",
              marginLeft: "10px",
            }}
          >
            <h6>
              {
                viewSol ?
                  <pre
                    style={{
                      backgroundColor: "#dae5ea",
                      color: "#263238",
                      width: "100%",
                      minHeight: "25vh"
                    }}
                  >
                    {problems[q].sol.split(/\r?\n/).map((e, _i) => (
                      <>
                        {e}
                        <br></br>
                      </>
                    ))}
                  </pre> :
                  <div className="hidden">
                    <div className="hideBox">
                      <VisibilityOffIcon style={{fontSize: "50px" }} /> 
                      <p className="inpOut"> The Solution is Hidden</p>
                      { !viewSol ?
                        <button className="view-solution" onClick={toggleSol}>VIEW SOLUTION</button> 
                        : null
                      }
                      {/* <Button className="view-solution" onClick={toggleSol}>View solution</Button> */}
                    </div> 
                    <div className="hiddenSol" />
                  </div>
                    
              }
                {/*  */}
            </h6>
              
          </div>

        </div>
        
      </div>

    </div>
  );
}