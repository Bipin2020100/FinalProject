import React, { useState } from "react";
import { form } from "react-bootstrap";
import axios from "axios";
// import jwt_decode from "jwt-decode";

function Login(props) {
    const [state, setState] = useState({
        userName: "",
        password: "",
    });

    const handleChange = (e) => {
        //     console.log(e);
        const { id, value } = e.target;
        setState((prevState) => ({ ...prevState, [id]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let payload = {
            userName: state.userName,
            password: state.password,
        };
        console.log("Bipin", payload);

        axios.post("http://localhost:3000/auth/login", payload).then((res) => {
            console.log(res.data.accessToken);

            localStorage.setItem("myToken", res.data.accessToken);
            console.log("logging Props",props)
            
            props.history.push('/welcome');
            
            

          //   var base64Url =localStorage.getItem("myToken").split(".")[1];
          //   var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
          //   var jsonPayload = decodeURIComponent(
          //       atob(base64)
          //           .split("")
          //           .map(function (c) {
          //               return (
          //                   "%" +
          //                   ("00" + c.charCodeAt(0).toString(16)).slice(-2)
          //               );
          //           })
          //           .join("")
          //   );
          //   let storedData = localStorage.getItem('myToken')

          //   let tokenData= jwt_decode(storedData)
          //   console.log('TokenData', tokenData)
            

            if (res.data.statusCode === 200) {
                console.log("login request successful");
                //  console.log(res.data.result);
            } else {
                console.log("Login request unsuccessful");
            }
        });
    };

    //  console.log(state);

    return (
        <div>
        <h2 style = {{color: "white"}}>Login Form</h2>
            <form style={{ backgroundColor: "lightblue" }}>
                <div className='mb-3' style={{ textAlign: "left" }}>
                    <label
                     className='form-label'
                        style={{ textAlign: "left", fontWeight: "bold" }}>
                        User Name
                    </label>
                    <input
                        id='userName'
                        type='text'
                     className='form-control form-control-lg'
                        style={{
                            width: 500,
                            textAlign: "center",
                            border: "3px solid green",
                        }}
                        autoComplete='userName'
                        value={state.userName}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3' style={{ textAlign: "left" }}>
                    <label
                     className='form-label'
                        style={{ textAlign: "left", fontWeight: "bold" }}>
                        Password
                    </label>
                    <input
                        id='password'
                        type='password'
                     className='form-control form-control-lg'
                        style={{
                            width: 500,
                            textAlign: "center",
                            border: "3px solid green",
                        }}
                        autoComplete='password'
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                {/* <div className='mb-3' style={{ textAlign: "left" }}>
                    <label
                     className='form-label'
                        style={{ textAlign: "left", fontWeight: "bold" }}>
                        Confirm Password
                    </label>
                    <input
                        id='password2'
                        type='password'
                     className='form-control form-control-lg'
                        style={{
                            width: 500,
                            textAlign: "center",
                            border: "3px solid green",
                        }}
                        autoComplete='password2'
                        value={state.password2}
                        onChange={handleChange}
                    />
                </div> */}
                <div className='.text-left' style={{ textAlign: "left" }}>
                    <button
                        type='submit'
                     className='btn btn-success'
                        onClick={onSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
