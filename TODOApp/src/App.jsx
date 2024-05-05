import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./Contexts/Todocontext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todoname) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, name: todoname } : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const TodoComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, isComplete: true } : prevTodo))
    );
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
        } else {
          console.error("Stored todos is not an array:", parsedTodos);
        }
      } catch (error) {
        console.error("Error parsing stored todos:", error);
      }
    }
  }, []);
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ TodoComplete, deleteTodo, updateTodo, addTodo, todos }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
