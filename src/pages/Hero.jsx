import { Navbar } from "../ui/Navbar.jsx";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { supabase } from "../services/supabase.js";

export const Hero = () => {
  const session = supabase.auth.getSession();
  return (
    <>
      {<Navbar />}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold ">Welcome !</h1>
            <p className="py-6 text-xl">
              Want to prepare yourself for the next interview ? Then get ready
              to face some challenging questions !
            </p>
            <Link to={"/interview"} className="btn btn-primary">
              Get Started <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
