import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal/index'
import { TodoForm } from '../TodoForm';

/*
// Versión 1 con Todo Provider

// TodoItem es el componente que nos servirá para reutilizar cada una de las veces que los usuarios creen un TODO. Y solo le tenemos que mandar props para cambiar el contenido.
// CreateTodoButton es el botón que abrirá el modal para crear nuevos TODOs en el futuro
// En los input, el valor que escribamos en él cambiará los items que aparecen en el TodoList.
// Ahora esto va a consumir el react hoook de local storage<
function App(props){
    // Cuando se elimina un TODO, se llama a onDelete={() => deleteTodo(todo.text)} y eso lo que hace es re renderizar todo y al quitar ese elemento del array de TODOs, no se muestra en pantalla por el searchedTodos.map((todo)] 
    return (
        <TodoProvider>
            <React.Fragment>
                <TodoCounter />
                <TodoSearch /> 
                <TodoContext.Consumer>
                    {"value es el valor enviado en el <TodoContext.Provider value de index.js de TodoContext. Aqui en vez de poner value, se pone las propiedades de value que se quieran utilizar. Recibe una función con todo el estado que guardarmos en el provider y así se mandan a los componentes"}
                    {({
                        error, 
                        loading, 
                        searchedTodos, 
                        completeTodo, 
                        deleteTodo
                    }) => (
                        <TodoList>
                            {error && <p>Hubo un error</p>}
                            {loading && <p>Estamos cargando</p>}
                            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
                            {"Esto que está dentro son los children"}
                            {searchedTodos.map((todo) => 
                                (<TodoItem 
                                    key={todo.text} 
                                    text={todo.text}
                                    completed={todo.completed}    
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                />))}
                        </TodoList>
                    )}
                </TodoContext.Consumer>
                <CreateTodoButton />
            </React.Fragment>
        </TodoProvider>
    );
}
*/

// Version 2: sin todo provider y consumer
function AppUI(props){
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    // Cuando se elimina un TODO, se llama a onDelete={() => deleteTodo(todo.text)} y eso lo que hace es re renderizar todo y al quitar ese elemento del array de TODOs, no se muestra en pantalla por el searchedTodos.map((todo)] 
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch /> 
            <TodoList>
                {error && <p>Hubo un error</p>}
                {loading && <p>Estamos cargando</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
                {/* Esto que está dentro son los children */}
                {searchedTodos.map((todo) => 
                    (<TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}    
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export {AppUI};