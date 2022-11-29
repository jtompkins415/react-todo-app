import React from "react";

const Todo = ({id, todo='default todo', remove}) => {
     const handleDelete = () => remove(id)
    return (
        <div>
            <ul>
            <li>{todo}</li>
            <button onClick={handleDelete}>X</button>
            </ul>
        </div>
    )
}

export default Todo; 