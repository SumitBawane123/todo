import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

function TodoList(){
   
    const {todos} = useContext(TodoContext)

    return (
        <div>
            <ul>
                {
                    todos.length? 
                    todos.map((list)=>{
                        console.log(list)
                        return <li>{list.text}</li>
                    })
                    : <div></div>
                }
            </ul>
        </div>
    )
}

export default TodoList;