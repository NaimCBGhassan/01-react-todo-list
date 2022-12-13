import { useState } from "react";
import styled from "styled-components";

const Conteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-top: 0.8rem;
  padding: 0.4rem;
  border-radius: 0.3rem;
`;

const Button = styled.button`
  color: white;
  background-color: ${({ bgColor }) => bgColor};
  border: thin solid #fff;
  padding: 0.5rem 1rem;
  margin: 0 0.2rem;
  border-radius: 0.3rem;

  &:hover {
    background-color: ${({ bgColor }) => bgColor.concat("80")};
  }
`;

const Input = styled.input`
  flex: 1 1 auto;
  padding: 0.5rem;
  border: thin solid #000;
  border-radius: 0.3rem;
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
    <Conteiner>
      {bandera ? <Input type="text" value={edit} onChange={handleChange} /> : <p>{tarea}</p>}
      <div>
        {!bandera && (
          <Button bgColor={"#2E9AFE"} onClick={handleEdit}>
            Edit
          </Button>
        )}
        {!bandera && (
          <Button bgColor={"#DF0101"} onClick={handleDelete}>
            Delete
          </Button>
        )}
        {bandera && (
          <Button bgColor={"#2E9AFE"} onClick={handleUpload}>
            Update
          </Button>
        )}
      </div>
    </Conteiner>
  );
};

export default TodoTable;
