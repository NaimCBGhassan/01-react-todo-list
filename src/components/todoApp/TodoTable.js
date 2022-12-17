import { useState } from "react";
import styled from "styled-components";

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

  const editTodo = () => setTodos(todos.map((el) => (id === el.id ? { tarea: edit, id } : el)));
  const handleUpload = (e) => {
    if (edit) {
      editTodo();
    }
    setBandera(null);
  };

  const handleDelete = (e) => setTodos(todos.filter((el) => el.id !== id));

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
