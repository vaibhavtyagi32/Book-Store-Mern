import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import CreateBookImg from "./pages/CreateBookImg";
import Book from "./pages/Book";
import Login from "./pages/Login";
import BookEdit from "./pages/BookEdit";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/add/book" element={<CreateBookImg />}></Route>
            <Route path="/book" element={<Book />}></Route>
            <Route path="/edit/book/:id" element={<BookEdit />}></Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
