import { useEffect, useState } from "react";
import styled from "styled-components";
import { helpHttp } from "../../helpers/helpHttp";
import TodoCreate from "./TodoCreate";
import TodoTable from "./TodoTable";

const Container = styled.div`
  max-width: 40%;
  margin: 0 auto 2rem auto;
`;
const H2 = styled.h2`
  padding: 1rem;
  text-align: center;
`;

const Todo = () => {
  const [todos, setTodos] = useState([]);

  let api = helpHttp();
  let url = "http://localhost:5000/todos";

  useEffect(() => {
    api.get(url).then((res) => setTodos(res));
  }, []);

  const createTodo = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then();

    /* setTodos([
      ...todos,
      {
        tarea: data,
        id: id,
      },
    ]); */
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
