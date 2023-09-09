import { Link } from "react-router-dom";
import { signup } from "../services/apiAuth.js";
import { useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../services/supabase.js";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup({ fullName: name, email, password });
    const session = supabase.auth.session();
    if (session) toast.success("Registered successfully !");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <h1 className={"text-5xl mt-16 mb-16 font-roboto"}>
        <span className={"flex gap-5"}>
          <img className={"h-12 "} src={"images/logo.png"} />
          <span className={"font-poppins font-bold text-6xlxl"}>JobPrep</span>
        </span>
      </h1>
      <div
        className={
          "max-w-2xl p-2 border flex border-slate-700 container  rounded-lg"
        }
      >
        <div className="p-6 space-y-4 m-auto md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className={"flex flex-col gap-2 mb-3"}>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
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
            <div className={"flex flex-col gap-2 mb-4"}>
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
            <button className={" btn btn-primary mx-2 "}>Submit</button>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Link className={"text-sm"} to={"/login"}>
              Already have an account ?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
