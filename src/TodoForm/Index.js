import React from 'react';
import { TodoContext } from '../TodoContext/Index.js';
import './TodoForm.css';
function TodoForm() {
    const { addTodo, setopenModal, } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');
// funcion de el boton añadir
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue); setopenModal(false);
    };

    const onCancel = () => { setopenModal(false); };
    
    const onChange = (event) => { setNewTodoValue(event.target.value); };
    
    return (
        <form onSubmit={onSubmit}><label>Esribe tu nuevo TODO</label><textarea
            placeholder="Cortar cebolla para el almuerzo"
            value={newTodoValue}
            onChange={onChange} />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}>
                    Cancelar
                    </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">Añadir
                    </button>
                    </div>
                    </form>);
}
export { TodoForm };