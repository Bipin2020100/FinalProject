import React, { useState } from "react";
import {form } from "react-bootstrap";
import axios from "axios";


function Signup(props) {
    const [state, setState] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        age: 0,
        role: "user",
        password: "",
        password2: "",
    });

    const handleChange = (e) => {
        //     console.log(e);
        const { id, value } = e.target;
        setState((prevState) => ({ ...prevState, [id]: value }));
    };

    const roleHandler = (e) => {
        const { name, value } = e.target;
        if (e.target.name !== "user") {
            setState((prevState) => ({ ...prevState, [name]: value }));
        }
        
        console.log(e.target)
    };

    const onSubmit = (e) => {
        if (state.password !== state.password2) {
            alert("Your passwords do not match");
        }
     //    e.preventDefault(); //This is no not reload the form htmlFor testing purposes
        let payload = {
            userName: state.userName,
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            age: state.age,
            role: state.role,
            password: state.password,
            password2: state.password2,
            todo:[]
        };
        console.log(payload);

        axios.post("http://localhost:3000/auth/signup", payload).then((res) => {
            console.log(res);
            if (res.data.statusCode === 200) {
                console.log("Signup request successful");
                //  console.log(res.data.result);
            } else {
                console.log("Signup request unsuccessful");
            }
        });
    };

    //  console.log(state);

    return (
        <div>
        <h2 style = {{color: "white"}}>Signup Form</h2>
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
                        First Name
                    </label>
                    <input
                        id='firstName'
                        type='text'
                        className='form-control form-control-lg'
                        style={{
                            width: 500,
                            textAlign: "center",
                            border: "3px solid green",
                        }}
                        autoComplete='firstName'
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3' style={{ textAlign: "left" }}>
                    <label
                        className='form-label'
                        style={{ textAlign: "left", fontWeight: "bold" }}>
                        Last Name
                    </label>
                    <input
                        id='lastName'
                        type='text'
                        className='form-control form-control-lg'
                        style={{
                            width: 500,
                            textAlign: "center",
                            border: "3px solid green",
                        }}
                        autoComplete='lastName'
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3' style={{ textAlign: "left" }}>
                    <label
                        className='form-label'
                        style={{ textAlign: "left", fontWeight: "bold" }}>
                        Email
                    </label>
                    <input
                        id='email'
                        type='text'
                        className='form-control form-control-lg'
                        style={{
                            width: 500,
                            textAlign: "center",
                            border: "3px solid green",
                        }}
                        autoComplete='email'
                        value={state.email}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3' style={{ textAlign: "left" }}>
                    <label
                        className='form-label'
                        style={{ textAlign: "left", fontWeight: "bold" }}>
                        Role:
                    </label>
                    <div className='form-check'>
                        <input
                            className='form-check-input'
                            type='radio'
                            name='role'
                            value = 'user'
                            id='flexRadioDefault1'
                            onChange = {roleHandler}
                            ></input>
                            
                        <label className='form-check-label' htmlFor='flexRadioDefault1'>
                            User
                        </label>
                    </div>
                    <div className='form-check'>
                        <input
                            className='form-check-input'
                            type='radio'
                            name='role'
                            value = 'admin'
                            id='flexRadioDefault2'
                            onChange ={roleHandler}
                            ></input>
                        <label className='form-check-label' htmlFor='flexRadioDefault2'>
                            Admin
                        </label>
                    </div>
                </div>

                <div className='mb-3' style={{ textAlign: "left" }}>
                    <label
                        className='form-label'
                        style={{ textAlign: "left", fontWeight: "bold" }}>
                        Age
                    </label>
                    <input
                        id='age'
                        type='text'
                        className='form-control form-control-lg'
                        style={{
                            width: 500,
                            textAlign: "center",
                            border: "3px solid green",
                        }}
                        autoComplete='age'
                        value={state.age}
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
                <div className='mb-3' style={{ textAlign: "left" }}>
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
                </div>
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

export default Signup;
