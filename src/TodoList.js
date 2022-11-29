import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo])
    }

    return(
        <div>
            <h1>To Do List</h1>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(({id, todo}) => <Todo id={id} todo={todo} key={id}/> )}
            </div>
        </div>
    )
}

export default TodoList;