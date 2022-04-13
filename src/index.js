import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Versión 1

/*
ReactDOM.render(
    <App greeting="Hellooo" />,
    document.getElementById('root')
);
*/


/*
// Versión 2: con propiedad children.

ReactDOM.render(
    <App>
        Buenassss
        <h1>Hola</h1>
    </App>
    ,
    document.getElementById('root')
);
*/

// Versión del proyecto

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

