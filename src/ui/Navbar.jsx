import { Link, useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { supabase } from "../services/supabase.js";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "../context.js";

export const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const Themes = ["light", "dark", "cupcake", "forest"];
  useEffect(() => {
    (async () => {
      const { data: user } = await supabase.auth.getUser();
      setUser(user.user);
    })();
  }, []);

  const [theme, setTheme] = useContext(themeContext);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    window.location.reload();
    if (error) {
      alert(error.message);
      throw new Error(error.message);
    }
  };

  const changeTheme = (theme) => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
  };
  return (
    <nav className="navbar max-h-[13vh] bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl m-4">
          <span>
            <img
              alt={"logo"}
              effect={"blur"}
              className={"h-10"}
              src={"/logo.png"}
            />
          </span>
          <span className={"font-bold font-poppins"}>JOB PREP</span>
        </Link>
      </div>
      <div className="flex-none p-4">
        {user == null ? (
          <Link to={"/register"} className="btn btn-accent">
            Sign Up/Sign In
          </Link>
        ) : (
          <button className="btn btn-accent" onClick={handleLogout}>
            Logout
          </button>
        )}

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
                        setTheme(theme);
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
