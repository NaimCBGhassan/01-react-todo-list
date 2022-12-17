import { useEffect, useState } from "react";
import styled from "styled-components";
import { helpHttp } from "../../helpers/helpHttp";
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
const P = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.4rem;
`;

const Todo = () => {
  const [todos, setTodos] = useState([]);

  let api = helpHttp();
  let url = "http://localhost:5000/todos";

  useEffect(() => {
    api.get(url).then((res) => setTodos(res));
  }, []);

  return (
    <Container>
      <H2>Todo Api</H2>
      <P>Todo Api funciona con la API de JSON Server.</P>
      <TodoCreate todos={todos} setTodos={setTodos} />
      {todos.map((todo) => (
        <TodoTable key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </Container>
  );
};

export default Todo;
