import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/todoSlice";

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (editText.trim()) {
      dispatch(updateTodo({ id: todo.id, title: editText }));
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`flex items-center justify-between border rounded-lg p-3 ${
        todo.checked ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-2 flex-grow">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => dispatch(toggleTodo({ id: todo.id, checked: !todo.checked }))}
          className="w-5 h-5"
        />
        {isEditing ? (
          <input
            type="text"
            className="border rounded px-2 py-1 flex-grow"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
          />
        ) : (
          <span
            className={`flex-grow ${todo.checked ? "line-through text-gray-500" : ""}`}
          >
            {todo.title}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 ml-5">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            title="Saqlash"
            className="text-green-600 hover:text-green-800"
          >
            <FaCheck />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            title="Tahrirlash"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaEdit />
          </button>
        )}
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          title="O‘chirish"
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
