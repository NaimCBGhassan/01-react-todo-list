import { useState } from "react";
import styled from "styled-components";
import { helpHttp } from "../../helpers/helpHttp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;

  @media screen and (min-width: 578px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem;
  }
`;

const ContainerButton = styled.div`
  align-self: stretch;
  @media screen and (min-width: 578px) {
    min-width: 215px;
  }
`;

const Button = styled.button`
  color: white;
  background-color: ${(props) => (props.className === "Delete" ? "#DF0101" : "#2E9AFE")};
  border: thin solid #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  width: 50%;

  &:hover {
    background-color: ${(props) => (props.className === "Delete" ? "#DF010180" : "#2E9AFE80")};
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border: thin solid #000;
  border-radius: 0.3rem;
  width: 100%;
`;

const TodoTable = ({ todo, todos, setTodos }) => {
  const { tarea, id } = todo;

  const [bandera, setBandera] = useState(null);
  const [edit, setEdit] = useState(tarea);

  const handleChange = (e) => setEdit(e.target.value);

  const handleEdit = (e) => setBandera(true);

  let api = helpHttp();
  let url = "http://localhost:5000/todos";

  const handleUpload = (e) => {
    if (edit) {
      let options = {
        body: { tarea: edit, id },
        headers: { "content-type": "application/json" },
      };
      api
        .put(`${url}/${id}`, options)
        .then((res) => setTodos(todos.map((el) => (res.id === el.id ? { tarea: edit, id: res.id } : el))));
    }
    setBandera(null);
  };

  const handleDelete = (e) => {
    let options = {
      headers: { "content-type": "application/json" },
    };

    api.del(`${url}/${id}`, options).then(() => setTodos(todos.filter((el) => el.id !== id)));
  };

  return (
    <Container>
      {bandera ? <Input type="text" value={edit} onChange={handleChange} /> : <p>{tarea}</p>}

      {!bandera && (
        <ContainerButton>
          <Button onClick={handleEdit}>Edit</Button>

          <Button className="Delete" onClick={handleDelete}>
            Delete
          </Button>
        </ContainerButton>
      )}

      {bandera && <Button onClick={handleUpload}>Update</Button>}
    </Container>
  );
};

export default TodoTable;
