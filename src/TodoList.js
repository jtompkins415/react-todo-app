import React, {useState} from 'react';
import {v4 as uuid} from uuid;
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {newTodo, id: uuid()}])
    }

    return(
        <div>
            <h1>To Do List</h1>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(({id, todo}) => <Todo todo={todo} /> )}
            </div>
        </div>
    )
}