import React from "react";

// Abstrae la lógica del local storage a un react hook
// Llama a local storage para traer algún elemento, el que envíen como argumento
function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue); 
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        // Simula que se esta trayendo información de un API.
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
            
                if(!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }else{
                    parsedItem = JSON.parse(localStorageItem);
                }
    
                setItem(parsedItem);
                // Ya terminó de cargar con los datos dados.
                setLoading(false);
    
            } catch (error) {
                setError(error);
            }
        }, 1000);
    });

    // Guarda las actualizaciones en local sotrage y en los estados de React. Hará que se rendericen los componentes y que el estado afecte.
    const saveItem = (newItem) => {
        try {
            const stringifiedTodos = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedTodos);
            setItem(newItem);    
        } catch (error) {
            setError(error);
        }
    };

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };