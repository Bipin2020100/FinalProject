import React from "react";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Todos from "./todos";

const Welcome = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
    });

    useEffect(() => {
        if (state.firstName === "") {
            let storedData = localStorage.getItem("myToken");

            let tokenData = jwt_decode(storedData);
            console.log("TokenData", tokenData);

            setState({
                ...state,
                firstName: tokenData.firstName,
                lastName: tokenData.lastName,
            });
        }
    }, [state]);

    return (
        <div style={{ color: "white" }}>
            <h1>
                Welcome {state.firstName} {state.lastName}! You are logged in
            </h1>
            
            <Todos/>

            {/* <div className='.text-left' style={{ textAlign: "left" }}>
                <button
                    type='button'
                    className='btn btn-dark'
                    // onClick={onTodo}
                    style={{ textAlign: "center" }}>
                    Add a Todo
                </button>
               
            </div> */}
        </div>
    );
};

export default Welcome;
