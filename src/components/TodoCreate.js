import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
const Input = styled.input`
  flex: ${({ grow }) => grow} 1 auto;
  padding: 0.5rem;
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  border: thin solid #000;
  border-radius: 0.2rem;
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
      <Input grow={1} type="text" placeholder="Write a todo" value={form} onChange={handleChange} />
      <Input grow={0.2} color={"white"} bgColor={"#2E9AFE"} type="submit" value="Create todo" />
    </Form>
  );
};

export default TodoCreate;
