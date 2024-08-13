import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {login as loginApi, signInWithGitHub} from "../services/apiAuth.js";
import {BsGithub} from "react-icons/bs";
import {themeContext} from "../context.js";
import toast from "react-hot-toast";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [theme, setTheme] = useContext(themeContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data} = await loginApi({email, password});
        if (data) {
            toast.success("Logged in successfully");
            navigate("/");
        }
    };

    const handleGithubLogin = async () => {
        const {data} = await signInWithGitHub();
        if (data) {
            toast.success("Logged in successfully");
        }
    };
    return (
        <div className={"flex flex-col items-center  justify-center"}>
            <h1 className={"text-5xl mt-16 mb-16 font-roboto"}>
        <span className={"flex gap-5"}>
          <img
              alt={"logo"}
              className={"h-16  rounded-full"}
              src={"/logo.png"}
          />
          <Link
              to={"/"}
              className={
                  "font-poppins font-bold text-6xl hover:duration-400 transition-all"
              }
          >
            JobPrep
          </Link>
        </span>
            </h1>
            <div
                className={
                    "max-w-2xl p-2 border flex border-slate-700 container mb-6 rounded-lg"
                }
            >
                <div className="p-6 space-y-4 m-auto  md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold font-poppins leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign In to your account
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className={"flex flex-col gap-2 mb-3"}>
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="name@gmail.com"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className={"flex flex-col gap-2 mb-6"}>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className={"flex "}></div>
                        <button className={" btn btn-accent btn-outline mx-1  "}>
                            Submit
                        </button>
                        <div onClick={handleGithubLogin} className={"mx-6 btn btn-outline"}>
                            <BsGithub/>
                            Sign in with github
                        </div>
                    </form>
                </div>
            </div>
            <Link
                className={`text-sm  ${
                    theme === "light" ? "hover:text-black" : "hover:text-white"
                } transition-all`}
                to={"/register"}
            >
                Don&apos;t have an account?
            </Link>
        </div>
    );
};
