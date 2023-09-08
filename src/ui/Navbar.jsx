import { Link } from "react-router-dom";
import { Themes } from "./Themes.jsx";
export const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl m-4">
          <span>
            <img className={"h-10"} src={"/images/logo.png"} />{" "}
          </span>
          <span className={"font-bold  font-poppins"}>JOB PREP</span>
        </Link>
      </div>
      <div className="flex-none p-4">
        <Link to={"/register"} className="btn btn-primary">
          Sign Up/Sign In
        </Link>
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Themes</summary>
              <ul className="p-2 h-screen overflow-scroll bg-base-100">
                {Themes.map((item, index) => (
                  <li key={index}>
                    <button>{item}</button>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
};
