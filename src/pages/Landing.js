import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivCard = styled.div`
  text-align: center;
  height: 350px;
  min-width: 350px;
  padding: 0rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 1rem 1rem 1rem #00000040;
  background-color: white;
`;
const H2 = styled.h2`
  padding: 1.6rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Input = styled.input`
  color: ${(props) => (props.type === "submit" ? "white" : "black")};
  background-color: ${(props) => (props.type === "submit" ? "#2e9afe" : "white")};
  width: 100%;
  margin-bottom: 0.3rem;

  &:hover {
    background-color: ${(props) => (props.type === "submit" ? "#2e9afe80" : "white")};
  }
`;

const initialValue = {
  name: "",
  password: "",
  role: "",
  id: null,
};

const Landing = ({ setHeader }) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
    setHeader(true);
  };

  return (
    <Div>
      <DivCard>
        <H2>Login Form </H2>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username" name="name" value={form.name} required onChange={handleChange} />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={form.name}
            required
            onChange={handleChange}
          />

          <select name="role" onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <div>
            <Input type="submit" value="Login" />
            <Input type="submit" value="Create Account" />
          </div>
        </Form>
      </DivCard>
    </Div>
  );
};

export default Landing;
