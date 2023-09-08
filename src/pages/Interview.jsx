import { Carousel } from "../ui/Carousel.jsx";
import { Navbar } from "../ui/Navbar.jsx";

export const Interview = () => {
  // const session = supabase.auth.getSession().then((data) => console.log(data));

  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Carousel />
          <div>
            <h1 className="text-6xl font-poppins font-bold">
              Are you Excited ?
            </h1>
            <p className="text-lg font-poppins py-6">
              Are you ready to get prepared by your new A.I Coach ? Go ahead
              start your challenging journey with your new A.I Coach by
              selecting your subject.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
