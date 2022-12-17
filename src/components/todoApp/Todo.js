import { useState } from "react";
import styled from "styled-components";
import TodoCreate from "./TodoCreate";
import TodoTable from "./TodoTable";

const Container = styled.div`
  max-width: 60%;
  margin: 0 auto 2rem auto;
`;
const H2 = styled.h2`
  padding: 1rem;
  text-align: center;
`;

const initialTodos = [
  {
    tarea: "Eat the dinner",
    id: 1,
  },
  {
    tarea: "Play the piano",
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
        tarea: data,
        id: id,
      },
    ]);
  };

  return (
    <Container>
      <H2>Todo App</H2>
      <TodoCreate createTodo={createTodo} />
      {todos.map((todo) => (
        <TodoTable key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </Container>
  );
};

export default Todo;
