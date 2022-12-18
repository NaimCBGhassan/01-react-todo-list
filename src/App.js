import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import MenuConceptual from "./pages/MenuConceptual";
import NotFound from "./pages/NotFound";
import TodoApi from "./components/todoApi/TodoApi";
import Todo from "./components/todoApp/Todo";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [header, setHeader] = useState(true);

  return (
    <>
      <HashRouter>
        {header && <Header setHeader={setHeader} />}
        <Routes>
          <Route path="/" element={<Landing setHeader={setHeader} />} />
          <Route path="/home" element={<MenuConceptual />} />
          <Route path="/todo-app" element={<Todo />} />
          <Route path="/todo-api" element={<TodoApi />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
