import React, { 
    Fragment,
    // useEffect, 
    useState 
} from 'react';
import {useNavigate} from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import 'react-phone-number-input/style.css'
import "../css/login.css";

import { auth, provider } from "../Firebase";

const Login = () => {

  const navigate = useNavigate();

  // const [mail,setMail] = useState("")
  // const [name,setName] = useState("")
  const [logged,setLogged] = useState(false)
  // const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  // const [phoneNo, setPhoneNo] = useState();
  // const [otp, setOTP] = useState('');
  const [show, setshow] = useState(false);


  // useEffect(() => {
  //   if (localStorage.getItem('logged') !== null && JSON.parse(localStorage.getItem("logged")) === true)
  //   {
  //     console.log("user was logged in")
  //     setMail(localStorage.getItem("logged"));
  //     setName(localStorage.getItem("name"));
  //     setMail(localStorage.getItem("email"));
  //     setLogged(true);
  //   }
  // }, [])
  
  const loginWithGoogle = () => {
    
    setLoading2(true);
    signInWithPopup(auth, provider)
      .then((result)=>{
          localStorage.setItem("uid", result.user.uid);
          localStorage.setItem("email", result.user.email);
          localStorage.setItem("logged",true);
          setLogged(true);
          setLoading2(false);
          navigate("/problems");
      })
      .catch((error) => {
          console.log(error);
      });
  }

  return (
    <Fragment>
      <div className='loginContainer'>
        <div className='loginLeft'>
          <a href='/'>
            <img
              className='loginLogo'
              src="https://res.cloudinary.com/triluxo-technologies-private-limited/image/upload/v1649426566/logo_jyok58.jpg"
              alt='logo'
            />
          </a>
        </div>

        <div className='loginForm'>
          <div className='accountContainer'>
            <div className='headingBox leftBorder'>
              <h2 className='loginTitle'>
                Login to your
                <span> Account </span>
              </h2>
            </div>
            
            <form className='formBx'>
              <div className='formContainer'>
                <div className="col-lg-12">
                  <h6 className="m-b15">
                    {/* Login with Social media */}
                  </h6>
                  {
                    loading2 ? <CircularProgress /> :
                      <Box>
                        {/* <Button
                          disabled={show}
                          variant='contained'
                          color='primary'
                          size="large"
                          onClick={loginWithGoogle}
                        >
                          <GoogleIcon
                            style={
                              {
                                borderRight: "1px solid #fff",
                                paddingRight: "10px"
                              }}
                          />
                          <span className='txt'>Google</span>
                        </Button> */}

                        <button disabled={show} onClick={loginWithGoogle} className="google-btn">
                          <span>
                            <img src="/images/google_logo.png" alt="" />
                          </span>
                          <span>
                            Sign in with Google
                          </span> 
                        </button>
                      </Box>
                  }
                </div>
                
              </div>
              <div id="recaptcha-container"></div>
            </form>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Login;