import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //global varible for accessing value 
   todos: {
     id: 1,
     todo: "first",
     completed: false
   },

   //global method to access component
   addTodo: (todo) => {},
   updateTodo: (id, todo) => {},
   deleteTodo: (id) => {},
   toggleComplete: (id) => {}
})

//costom hook for wrapper
export default function useTodos(){
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;