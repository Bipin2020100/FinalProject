import React from "react";

function Todo(props) {
    const onDelete = () => {};

    return (
        <div>
            <div style={{fontSize:25,fontWeight: "bold"}}>{props.todo}</div>
            <button
                type='button'
                className='btn btn-dark'
                style={{ textAlign: "center" }}>
                Update
            </button>{" "}
            <button
            
                type='button'
                className='btn btn-danger'
                onClick={props.onDelete}
                style={{ textAlign: "center" }}>
                Delete        
                <img alt = ""  src='/alert.png' style={{alignItems: "center", width: 15, height: 15 }} />
            </button>
        </div>
    );
}

export default Todo;
