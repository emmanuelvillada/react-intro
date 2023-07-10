import { TodoContext } from '../TodoContext/Index.js';
import './Todocounter.css';
import React from 'react'

function TodoCounter() {
    const {completedTodos , totalTodos} = React.useContext(TodoContext);
    return (
        <h1>
        Completaste {totalTodos} de {completedTodos} tareas.
        </h1>
    );
}

export {TodoCounter}