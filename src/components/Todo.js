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

  const editTodo = (data, id) => {
    setTodos(todos.map((el) => ((id = el.id) ? { data, id } : el)));
  };

  return (
    <Container>
      <TodoCreate createTodo={createTodo} />
      {todos.map((todo) => (
        <TodoTable key={todo.id} todo={todo} editTodo={editTodo} />
      ))}
    </Container>
  );
};

export default Todo;
