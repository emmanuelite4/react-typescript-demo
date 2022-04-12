import "./styles.css";
import { useState } from "react";
import CreateTodo from "./pages/CreateTodo";
import { TodoProps } from "./types/todo";
import TodoList from "./pages/TodoList";

export default function App() {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoProps>();

  const handleAddTodo = (props: TodoProps) => {
    setTodos((prev) => {
      return prev.concat([props]);
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CreateTodo onSubmit={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
