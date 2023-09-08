import { Card } from "./Card.jsx";

export const Carousel = () => {
  return (
    <div className={"p-16 m-auto  justify-center flex "}>
      <div className=" sm:carousel carousel-center max-w-xl p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <Card title={"Javascript"} />
        </div>
        <div className="carousel-item">
          <Card title={"React"} />
        </div>
        <div className="carousel-item">
          <Card title={"Node.JS"} />
        </div>
        <div className="carousel-item">
          <Card title={"Machine Learning"} />
        </div>
      </div>
    </div>
  );
};
