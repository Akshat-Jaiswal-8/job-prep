import { Navbar } from "../ui/Navbar.jsx";
import { supabase } from "../services/supabase.js";

export const Interview = () => {
  const session = supabase.auth.getSession().then((data) => console.log(data));

  return (
    <>
      {!session && <Navbar />}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/images/Javascript.png" alt="javascript" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
