import React from "react";

const Todo = ({id, todo='default todo'}) => {
    return (
        <div>
            <ul>
            <li>{todo}</li>
            </ul>
        </div>
    )
}

export default Todo; 