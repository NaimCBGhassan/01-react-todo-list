import "./App.css";
import TodoApi from "./components/todoApi/TodoApi";
import Todo from "./components/todoApp/Todo";

function App() {
  return (
    <div>
      <TodoApi />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
