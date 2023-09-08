import { Header } from "../ui/Header.jsx";
import { Carousel } from "../ui/Carousel.jsx";
import { Footer } from "../ui/Footer.jsx";

export const Interview = () => {
  // const session = supabase.auth.getSession().then((data) => console.log(data));

  return (
    <>
      <Header />
      <Carousel />
      <Footer />
    </>
  );
};
