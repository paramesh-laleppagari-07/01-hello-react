import React, { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
  ]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text: text.trim(), done: false };
    setTodos(prev => [newTodo, ...prev]); // immutable: new array
    setText("");
  };

  const toggle = id => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const remove = id => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <label style={{ textDecoration: t.done ? "line-through" : "" }}>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggle(t.id)}
              />{" "}
              {t.text}
            </label>
            <button onClick={() => remove(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
