import { useState } from "react";
import styled from "styled-components";

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
  color: ${(props) => (props.type === "text" ? "black" : "white")};
  background-color: ${(props) => (props.type === "text" ? "white" : "#2e9afe")};

  &:hover {
    background-color: ${(props) => (props.type === "text" ? "white" : "#2e9afe80")};
  }
`;

const TodoCreate = ({ createTodo }) => {
  const [form, setForm] = useState("");

  const handleChange = (e) => setForm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form) {
      createTodo(form);
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
