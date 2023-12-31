import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo, saveTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo} // spread it out instead of what's below
            // id={todo.id}
            // completed={todo.completed}
            // title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            saveTodo={saveTodo}
          />
        );
      })}
    </ul>
  );
}
