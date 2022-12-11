const TodoTable = ({ todo }) => {
  return (
    <div>
      <h3>{todo.todo}</h3>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoTable;
