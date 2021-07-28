import React from 'react';

function Todo(props) {
     
     const onDelete =()=> {
          
     }
     
     
     return (
          
          <div>
          
               {props.todo}
               <button
                    type='button'
                    className='btn btn-dark'
                    style={{ textAlign: "center" }}>
                    Update
                </button>{" " }
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={props.onDelete}
                    style={{ textAlign: "center" }}>
                    Delete
                </button>
          </div>
     );
}

export default Todo;