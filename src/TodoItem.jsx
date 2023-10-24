export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
  const enableEditing = () => {}

  return (
    <li className="todo-li">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
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
