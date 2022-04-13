import React from "react";
import { TodoContext } from "./TodoContext";
import './TodoCounter.css'

// Version 1: Estilos Css en línea con objetos
/*
const h2Styles = {
    color: "red",
    backgroundColor: "yellow"
}

function TodoCounter(){
    return (
        <h2 style={h2Styles}>Has completado 2 de 3 TODOs</h2>
    );
}
*/

// Version 2: Estilos Css con archivo externo y pasando por props los parámetros

// Estos parámetros son los atributos del componente
/*
function TodoCounter({total, completed}){
    return (
        <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
    );
}
*/

// Version 3: Usando react.use context para los parámetro
function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export {TodoCounter};