import { CreateTodoButton } from '../Createtodobutton/Index.js';
import { EmptyTodos } from '../EmptyTodos/Index.js';
import { TodosError } from '../ErrorTodos/Index.js';
import { TodosLoading } from '../LoadingTodos/Index.js';
import { TodoContext } from '../TodoContext/Index.js';
import { TodoCounter } from '../TodoCounter/Index.js';
import { TodoItem } from '../TodoItem/Index.js';
import { TodoList } from '../TodoList/Index.js';
import { TodoSearch } from '../TodoSearch/Index.js';
import {TodoForm} from '../TodoForm/Index.js';
import {Modal} from '../Modal/Index.js'
import React from 'react';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setopenModal,
        togglemodal,
        addTodo,
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton 
            setopenModal = {setopenModal}
            />

            {openModal && (
            <Modal>
                <TodoForm></TodoForm>
            </Modal>
            )}
        </>
    );
}

export { AppUI };
