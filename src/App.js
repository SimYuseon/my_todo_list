import TodoList from "./pages/TodoList";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="detail:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
