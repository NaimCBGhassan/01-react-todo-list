import { useState } from "react";
import styled from "styled-components";
import { helpHttp } from "../../helpers/helpHttp";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 578px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Input = styled.input`
  flex: ${(props) => (props.type === "text" ? 1 : 0.2)} 1 auto;
  padding: 0.5rem;
  color: ${(props) => (props.type === "text" ? "black" : "white")};
  background-color: ${(props) => (props.type === "text" ? "white" : "#2e9afe")};
  border: thin solid #000;
  border-radius: 0.2rem;

  &:hover {
    background-color: ${(props) => (props.type === "text" ? "white" : "#2e9afe80")};
  }
`;

const TodoCreate = ({ todos, setTodos }) => {
  const [form, setForm] = useState("");

  let api = helpHttp();
  let url = "http://localhost:5000/todos";

  const handleChange = (e) => setForm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form) {
      let options = {
        body: { tarea: form, id: Date.now() },
        headers: { "content-type": "application/json" },
      };

      api.post(url, options).then((res) => setTodos([...todos, res]));
    }
    setForm("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Write a todo" value={form} onChange={handleChange} />
      <Input type="submit" value="Create todo" />
    </Form>
  );
};

export default TodoCreate;
