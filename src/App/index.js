import { TodoProvider } from '../TodoContext';
import {AppUI} from './AppUI'

// Version 1: se ponen atributos en el componente en App.js y acá se traen en props.

/*
// Empieza con mayúscula, entonces es un componente
function App(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                {props.greeting}
                </a>
            </header>
        </div> 
    );
}
*/

/*

// Version 2: children con elementos en el App.js entre las etiquetas de apertura y cierre. Ahí se renderiza, pero acá se dice qué renderizar.

function App(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                {props.children}
                </a>
            </header>
        </div> 
    );
}
*/

// Versin 3: proyecto

/* const defaultTodos = [
    {
        text: "Cortar cebolla",
        completed: true
    },
    {
        text: "Tomar curso de React",
        completed: false
    },
    {
        text: "Ver película",
        completed: false
    },
    {
        text: "Ver Wordpress",
        completed: false
    }
] */

// Version 2 con React.useContext
function App(props){
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;