import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Write a todo" value={form} onChange={handleChange} />
      <input type="submit" value="Create todo" />
    </form>
  );
};

export default TodoCreate;
