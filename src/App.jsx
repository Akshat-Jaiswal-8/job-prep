import {Hero} from "./pages/Hero.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Interview} from "./pages/Interview.jsx";
import {Register} from "./pages/Register.jsx";
import {Login} from "./pages/Login.jsx";
import QuestionPage from "./pages/QuestionPage.jsx";
import {ErrorPage} from "./pages/ErrorPage.jsx";
import {Toaster} from "react-hot-toast";
import {useEffect, useState} from "react";
import {supabase} from "./services/supabase.js";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        (async () => {
            const {data: user} = await supabase.auth.getUser();
            setIsAuthenticated(!!user.user);
        })();
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Hero/>}></Route>
                <Route path={"register"} element={<Register/>}/>
                <Route path={"login"} element={<Login/>}/>
                <Route path={"interview"} element={<Interview/>}/>
                <Route path={"/interview/:subject"} element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <QuestionPage/>
                    </ProtectedRoute>
                }/>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
            <Toaster position="top-center" reverseOrder={false}/>
        </BrowserRouter>

    );
}
