import { Navbar } from "../ui/Navbar.jsx";
import { Footer } from "../ui/Footer.jsx";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase.js";

export const Hero = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: user } = await supabase.auth.getUser();
      if (user.user == null) setUser(false);
      else setUser(true);
    })();
  }, []);

  console.log(user);
  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col pt-40 min-h-[81.5vh] bg-base-200">
        <div className=" text-center">
          <div>
            <h1 className="text-8xl m-auto w-full mb-8 text-accent font-bold">
              Welcome to Job Prep !
            </h1>
            <p className="px-60 py-10 text-xl font-semibold font-poppins container w-fit leading-relaxed text-center">
              Your Ultimate Interview Success Partner! JobPrep is your go-to
              online resource for interview preparation and career advancement.
              With our AI-driven tools and expert guidance, we'll help you excel
              in interviews, land your dream job, and take your career to the
              next level.
            </p>
            {user === false ? (
              <Link to={"/register"} className="btn btn-accent">
                Sign Up <BsArrowRight />
              </Link>
            ) : (
              <Link to={"/interview"} className="btn btn-accent">
                Get Started <BsArrowRight />
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
