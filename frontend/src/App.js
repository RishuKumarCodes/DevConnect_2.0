import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EditorPage from "./components/EditorPage";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <div>
        <Toaster position="top-center"></Toaster>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/editor/:roomId" element={<EditorPage />} />
      </Routes>
    </>
  );
}

export default App;
