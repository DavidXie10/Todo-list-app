import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        // Esto toma el estado anterior, si antes era false, ahora es true
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button 
            className="CreateTodoButton" 
            // onClick={() => console.log('Click')}
            // onClick={onClickButton('Aquí se debería abrir el modal')} // Esto no porque hace una ejecución
            onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButton };