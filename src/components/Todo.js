import { useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoTable from "./TodoTable";

const initialTodos = [
  {
    todo: "Eat the dinner",
    id: 1,
  },
  {
    todo: "Play the piano",
    id: 2,
  },
];

const Todo = () => {
  const [todos, setTodos] = useState(initialTodos);

  const createTodo = (data) => {
    const id = Date.now();
    setTodos([
      ...todos,
      {
        todo: data,
        id: id,
      },
    ]);
  };

  return (
    <>
      <TodoCreate createTodo={createTodo} />
      {todos.map((todo) => (
        <TodoTable key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default Todo;
