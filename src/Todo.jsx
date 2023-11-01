import { useEffect, useState, useMemo } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { FilterableFooter } from "./FilterableFooter";

export function Todo() {
  const [todos, setTodos] = useState(() => {
    // whatever gets returned from the function is the default value
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  const [type, setType] = useState(() => {
    const localTypeValue = localStorage.getItem("TYPE");
    if (localTypeValue === null) return "All";
    return localTypeValue;
  });

  const filteredTodos = useMemo(() => {
    // filter todos here
    return todos.filter((todo) => {
      switch (type) {
        case "Active":
          return !todo.completed;
        case "Completed":
          return todo.completed;
        default:
          return todo;
      }
    });
  }, [type, todos]);

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: title, completed: false },
    ]);
  }

  function saveTodo(id, title) {
    setTodos((currentTodos) => {
      // Проверяем, является ли новый заголовок пустой строкой
      if (title.trim() === "") {
        // Если заголовок пуст, удаляем соответствующий todo
        return currentTodos.filter((todo) => todo.id !== id);
      } else {
        // Иначе обновляем заголовок todo
        return currentTodos.map((todo) =>
          todo.id === id ? { ...todo, title: title } : todo
        );
      }
    });
  }  

  const filterHandler = (filterType) => {
    localStorage.setItem("TYPE", filterType);
    setType(filterType);
  };

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.completed));
  }

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        saveTodo={saveTodo}
      />
      <FilterableFooter
        list={todos}
        clearCompleted={clearCompleted}
        filterHandler={filterHandler}
        currentFilter={type}
      />
    </>
  );
}
