import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

function TodoForm(){
   
    const { addTodo } = useContext(TodoContext)
    const [text, setText]=useState("")

    const handler = (e) =>{
        e.preventDefault();
        addTodo(text)
        setText("")
    }

    return (
        <div>
            <form onSubmit={handler}>
            <input
                type="text"
                placeholder="Enter Task"
                value={text}
                onChange={(e)=> setText(e.target.value)}>
            </input>
            <button>
                Add To do
            </button>
            </form>
        </div>
    )
}

export default TodoForm;
