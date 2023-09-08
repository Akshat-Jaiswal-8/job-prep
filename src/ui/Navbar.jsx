import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          JobPrep
        </Link>
      </div>
      <div className="flex-none p-4">
        <Link to={"/register"} className="btn btn-primary">
          Sign Up/Sign In
        </Link>
      </div>
    </div>
  );
};
