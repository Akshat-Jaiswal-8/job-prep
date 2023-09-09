import { Navbar } from "../ui/Navbar.jsx";
import { Link } from "react-router-dom";
import { supabase } from "../services/supabase.js";
import { Footer } from "../ui/Footer.jsx";

export const Hero = () => {
  const session = supabase.auth.getSession();
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen  bg-base-200 ">
        <div className="container  hero-content flex-col lg:flex-row">
          <img
            src="/images/hero.jpg"
            className="max-w-sm rounded-lg shadow-2xl "
          />
          <div className={"mx-16"}>
            <h1 className="text-5xl font-poppins font-bold">
              Welcome to JobPrep!
            </h1>
            <p className="py-6">
              Your Ultimate Interview Success Partner! JobPrep is your go-to
              online resource for interview preparation and career advancement.
              With our AI-driven tools and expert guidance, we'll help you excel
              in interviews, land your dream job, and take your career to the
              next level.
            </p>
            {session ? (
              <Link to={"interview"} className="btn btn-primary">
                Get Started
              </Link>
            ) : (
              <Link to={"register"} className="btn btn-primary">
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
// Want to prepare yourself for the next interview ? Then get ready
// to face some challenging questions !
