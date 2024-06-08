import React, { createContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({children}) =>{
    const [todos , setTodos] = useState([])

    const addTodo = (text) => {
        setTodos([...todos, { text, id: Date.now() }]);
    };
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{todos, addTodo ,removeTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext , TodoProvider};