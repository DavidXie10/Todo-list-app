// Maquetación del formulario para el modal 

import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm(){
    // Se crea un estado local dentro de este componente con su valor y actualizador
    const [newTodoValue, setNewTodoValue] = React.useState('');

    // Dentro del contexto TodoContext, agarro la función recién creada de addTodo
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    // Cuando se escribe algo en el text area, se cambia el valor del newTodoValue
    const onChange = (event) => {
        const value = event.target.value;
        setNewTodoValue(value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue); // Crea un nuevo TODO en local storage
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Cortar la cebolla para el almuerzo"
                onChange={onChange} 
            />
            { /* Cada vez que escriban algo en el textarea*/ }
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                {/* Envio de evento del formulario. Por defecto, recargan la página */}
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};