import React from 'react';

function Todo(props) {
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
                    className='btn btn-dark'
                    style={{ textAlign: "center" }}>
                    Delete
                </button>
          </div>
     );
}

export default Todo;