import React from "react";
import { TodoContext } from "./TodoContext";
import './TodoSearch.css'

// Aquí se tiene el estado en algun componente papá
function TodoSearch(){
    // Versión usando estados solo en este componente (o sea no se pasa por parámetros)
    // Se crea un estado vacío que se guardará en la variable searchValue y tenemos una función setSearchValue para actualizar el valor
    // Así se conectan elementos dentro de un mismo componente
    // const [searchValue, setSearchValue] = React.useState('');

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input className="TodoSearch" placeholder='cebolla' value={searchValue} onChange={onSearchValueChange}/>
    );
}

export {TodoSearch}
