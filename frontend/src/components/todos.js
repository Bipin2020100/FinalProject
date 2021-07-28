import React from "react";
import Todo from "./todo";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import axios from "axios";

function Todos(props) {
    const [state, setState] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        age: 0,
        role: "user",
        password: "",
        currentTodo: "",
        storedData: "",
        todo: [],
    });

    const handleChange = (e) => {
        //     console.log(e);
        const { id, value } = e.target;
        console.log(id, value);
        setState((prevState) => ({ ...prevState, [id]: value }));
    };

    const onSubmit = () => {
        let payload = { email: state.email, todo: state.currentTodo };
        console.log(payload);

        axios
            .post("http://localhost:3000/todo", payload, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: state.storedData,
                },
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });

        setState((prevState) => ({
            ...prevState,
            todo: [...state.todo, state.currentTodo],
        }));
    };

    const onDeleteHandler = (item) => {
        let payload = { email: state.email, todo: item };
        console.log(payload);

        axios
            .put("http://localhost:3000/todo", payload, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: state.storedData,
                },
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });

        let tempArr = state.todo.filter((todo) => {
            return todo !== item;
        });
        setState((prevState) => ({
            ...prevState,
            todo: tempArr,
        }));
    };

    useEffect(() => {
        if (state.userName === "") {
            let storedData = localStorage.getItem("myToken");

            let tokenData = jwt_decode(storedData);
            console.log("TokenData", tokenData);

            setState({
                ...state,
                userName: tokenData.userName,
                firstName: tokenData.firstName,
                lastName: tokenData.lastName,
                email: tokenData.email,
                age: tokenData.age,
                role: tokenData.role,
                password: tokenData.password,
                todo: tokenData.todo,
                storedData: storedData,
            });
        }
    }, [state]);

    return (
        <div>
            <label
                className='form-label'
                style={{ textAlign: "left", fontWeight: "bold", fontSize: 30 }}>
                Your ToDo's:
            </label>

            <div>
                {state.todo.map((item) => {
                    return (
                        <Todo
                            key={item}
                            todo={item}
                            onDelete={() => {
                                onDeleteHandler(item);
                            }}
                        />
                    );
                })}
            </div>

            <h3 style={{ textAlign: "left" }}>
                Setup your TODO list here:
                <img
                    alt=''
                    src='/kick.png'
                    style={{ width: 130, height: 140 }}
                />
            </h3>
            <div className='mb-3' style={{ textAlign: "left" }}>
                <input
                    id='currentTodo'
                    type='text'
                    className='form-control form-control-lg'
                    style={{
                        width: 500,
                        textAlign: "center",
                        border: "3px solid green",
                        align: "center",
                    }}
                    onChange={handleChange}
                />{" "}
                <br></br>
                <button
                    type='button'
                    className='btn btn-dark'
                    onClick={onSubmit}
                    // style={{ textAlign: "center" }}
                >
                    Submit Todo
                </button>
            </div>
        </div>
    );
}

export default Todos;
