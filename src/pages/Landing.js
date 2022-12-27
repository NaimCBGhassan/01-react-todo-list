import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { helpHttp } from "../helpers/helpHttp";
import MsgExist from "../components/MsgExist";

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

  &:hover {
    background-color: ${(props) => (props.type === "submit" ? "#2e9afe80" : "white")};
  }
`;

const Button = styled.button`
  color: white;
  background-color: #2e9afe;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: #2e9afe80;
  }
`;

const initialValue = {
  name: "",
  password: "",
  role: "User",
  id: null,
};

const Landing = ({ setHeader, setUser, setDbUsers, dbUsers }) => {
  const [form, setForm] = useState(initialValue);
  const [msg, setMsg] = useState("");

  let api = helpHttp();
  const url = "http://localhost:5000/users";

  useEffect(() => {
    api.get(url).then((res) => setDbUsers(res));
  }, [url]);

  useEffect(() => {
    setTimeout(() => setMsg(""), 3000);
  }, [msg]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    const accExist = dbUsers.some((el) => el.username === form.name);
    if (accExist) {
      let user = dbUsers.find((el) => el.username === form.name);
      if (!(user.password === form.password) || !(user.ralo === form.role)) {
        !(user.role === form.role) && setMsg("Role incorrect");
        !(user.password === form.password) && setMsg("Pasword incorrect");
      }
      if ((user.password === form.password) & (user.role === form.role)) {
        setUser(user);
        navigate("/home");
        setHeader(true);
      }
    }
    if (!accExist) {
      setMsg("Username does not exist");
    }
  };

  const handleCreAcc = (e) => {
    e.preventDefault();
    const accExist = dbUsers.some((el) => el.username === form.name);
    setMsg("Username already exist");
    if (!accExist) {
      let options = {
        body: {
          username: form.name,
          password: form.password,
          role: form.role,
          id: Date.now(),
          tarea: {},
        },
        headers: { "content-type": "application/json" },
      };

      api.post(url, options).then((res) => {
        setDbUsers(res);
        navigate("/home");
        setHeader(true);
      });
    }
  };

  return (
    <Div>
      {msg && <MsgExist msg={msg} />}
      <DivCard>
        <H2>Login Form </H2>
        <Form onSubmit={handleCreAcc}>
          <Input
            type="text"
            placeholder="Username"
            name="name"
            title="The field only accepts letters, numbers"
            pattern="^[\wÑñÁáÉéÍíÓóÚúÜü]+$"
            minLength={5}
            required
            autoFocus
            value={form.name}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            title="The field only accepts letters, numbers"
            pattern="^[\wÑñÁáÉéÍíÓóÚúÜü]+$"
            minLength={5}
            required
            onChange={handleChange}
          />

          <select name="role" onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <div>
            <Input type="submit" value="Create Account" />
          </div>
        </Form>
        <Button onClick={handleLogin}>Login</Button>
      </DivCard>
    </Div>
  );
};

export default Landing;
