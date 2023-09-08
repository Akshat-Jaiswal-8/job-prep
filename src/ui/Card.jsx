// eslint-disable-next-line react/prop-types
import { BsArrowRight } from "react-icons/bs";

export const Card = ({ title }) => {
  return (
    <>
      <div className={"flex flex-col items-center justify-center mt-16 p-4"}>
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img src="/images/Javascript.png" alt="javascript" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className={"mb-4"}>
              Are you ready to ace your next {title} interview ?
            </p>
            <div className="card-actions justify-center ">
              <button className="btn btn-primary ">
                Ready <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
