import React from "react";
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props){
    const { 
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    // Crear un contexto para el modal
    const [openModal, setOpenModal] = React.useState(false);

    // Cada vez que se renderice nuestro componente, vamos a hacer esta cuenta.
    // Aquí se cuentan cuantos Todos fueron completados.
    // Estos cálculos se envían al componente TodoCounter 
    const completedTodos = todos.filter( todo => todo.completed === true).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1){
        // La lista de TODOs que se tienen por defecto si el usuario no ingresa nada en el input
        searchedTodos = todos;
    }else{
        // Si los usuarios ya escribieron algo. Todolist solo va a renderizar los que cumplan con las condiciones de búsqueda.
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase(); 
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text
        });
        /*  
            newTodos[todoIndex] = {
            text: todos[todoIndex].text,
            completed: true
        }; */
        saveTodos(newTodos);
    }

    // Cuando se ejecuta esta función, se causa un re render de nuestros componentes.
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex( todo => todo.text === text);
        // Queremos cambiar el estado de todos, así que se usa un nuevo todos
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        /*  
            newTodos[todoIndex] = {
            text: todos[todoIndex].text,
            completed: true
        }; */
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex( todo => todo.text === text);
        // Queremos cambiar el estado de todos, así que se usa un nuevo todos
        const newTodos = [...todos];
        // Splice es desde donde queremos eliminar cuantos elementos (segundo parámetro)
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    console.log("Renderiza de nuevo, antes de use effect");

/*     React.useEffect(() => {
        console.log("Use effect");
    }, []) */

    console.log("Renderiza de nuevo, después de use effect");
    return (
        // Hay que decirle a Provider cual es el estado que vamos a compartir en todos los componentes que están contenidos. Todas las propiedades que queramos compartir en nuestro contexto se ponen en el atributo value, que será un objeto. Ahí se ponen todos los valores que queramos compartir en todas partes.
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }} >
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}