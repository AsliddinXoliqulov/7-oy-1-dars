import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos.list);

  if (todos.length === 0) {
    return <p className="text-center text-gray-500">Hech qanday vazifa yo‘q.</p>;
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
