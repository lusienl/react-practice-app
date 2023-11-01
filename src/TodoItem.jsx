import { useState } from "react";

export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  saveTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState(title);

  const handleKeydown = (e) => {
    if (e.code === "Enter" || e.type === "blur") {
      saveTodo(id, editingValue);
      setIsEditing(false);
    }
  };

  return (
    <li className="todo-li">
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      {isEditing ? (
        <input
          autoFocus
          value={editingValue}
          onChange={(e) => setEditingValue(e.target.value)}
          onKeyDown={handleKeydown}
          onBlur={handleKeydown}
        />
      ) : (
        <label onDoubleClick={() => setIsEditing(true)}>{title}</label>
      )}
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
