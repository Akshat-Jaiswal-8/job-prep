import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Navbar = () => {
  const Themes = ["light", "dark", "cupcake", "forest"];

  const changeTheme = (theme) => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    console.log(theme);
  };
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl m-4">
          <span>
            <LazyLoadImage
              effect={"blur"}
              className={"h-10"}
              src={"/images/logo.png"}
            />{" "}
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
              <ul className="p-2   bg-base-100">
                {Themes.map((theme, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        changeTheme(theme);
                      }}
                    >
                      {theme}
                    </button>
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
