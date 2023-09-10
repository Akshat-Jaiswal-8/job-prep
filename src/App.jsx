import { Hero } from "./pages/Hero.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Interview } from "./pages/Interview.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import QuestionPage from "./pages/QuestionPage.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { themeContext } from "./context.js";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <themeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Hero />}></Route>
          <Route path={"register"} element={<Register />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"interview"} element={<Interview />} />
          <Route path={"interview/:subject"} element={<QuestionPage />} />
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </themeContext.Provider>
  );
}
