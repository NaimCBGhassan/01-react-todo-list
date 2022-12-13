import { useState } from "react";
import styled from "styled-components";
import TodoCreate from "./TodoCreate";
import TodoTable from "./TodoTable";

const Container = styled.div`
  max-width: 40%;
  margin: 2rem auto;
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
      <TodoCreate createTodo={createTodo} />
      {todos.map((todo) => (
        <TodoTable key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </Container>
  );
};

export default Todo;
