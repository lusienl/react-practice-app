export function FooterCounter({ list }) {
    const remainingTodos = list.filter(todo => !todo.completed); // state remains unchanged
  
    return (
      <>
        <span className="counter">
          {remainingTodos.length} {remainingTodos.length === 1 ? "item" : "items"} left
        </span>
      </>
    );
  }
  