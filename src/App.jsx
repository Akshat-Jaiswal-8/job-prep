import { Hero } from "./ui/Hero.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Interview } from "./pages/Interview.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Hero />}></Route>
        <Route path={"/interview"} element={<Interview />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
