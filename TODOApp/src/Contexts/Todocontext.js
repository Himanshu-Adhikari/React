import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoname: "Mera kaam",
      IsComplete: false,
    },
  ],
  addTodo: (todoname) => {},
  updateTodo: (id, todoname) => {},
  deleteTodo: (id) => {},
  TodoComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
