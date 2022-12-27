import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import MenuConceptual from "./pages/MenuConceptual";
import NotFound from "./pages/NotFound";
import TodoApi from "./components/todoApi/TodoApi";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [header, setHeader] = useState(true);
  const [dbUsers, setDbUsers] = useState({});
  const [user, setUser] = useState({});

  return (
    <>
      <HashRouter>
        {header && <Header setHeader={setHeader} user={user} />}
        <Routes>
          <Route
            path="/"
            element={<Landing setHeader={setHeader} dbUsers={dbUsers} setDbUsers={setDbUsers} setUser={setUser} />}
          />
          <Route path="/home" element={<MenuConceptual />} />
          <Route path="/todo-api" element={<TodoApi user={user} setDbUsers={setDbUsers} setUser={setUser} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
