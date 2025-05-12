import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ProgressBar from "./components/ProgressBar";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos.list);
  const completedCount = todos.filter((todo) => todo.checked).length;
  const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">📝 Todo List</h1>
      <TodoForm />
      <ProgressBar progress={progress} />
      <TodoList />
    </div>
  );
}

export default App;
