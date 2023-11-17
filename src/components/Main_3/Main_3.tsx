import "./main_3.css";
// assets
import main_3_img_1 from "../../../public/profile-1.jpg";
import main_3_img_2 from "../../../public/profile-2.jpg";
import main_3_img_3 from "../../../public/profile-3.jpg";

export default function Main_3() {
  let arrOfCards = [
    {
      name: "Satish Patel",
      img: main_3_img_1,
    },
    {
      name: "Bruce McKenzie",
      img: main_3_img_2,
    },
    {
      name: "Iva Boyd",
      img: main_3_img_3,
    },
  ];
  return (
    <>
      <article id="main_3" className="">
        {arrOfCards.map((e, i) => {
          return <CommentCard key={i} img={e.img} name={e.name} />;
        })}
      </article>
    </>
  );
}

const CommentCard = ({ img, name }) => {
  return (
    <>
      <div className=" px-[2rem] py-[1.5rem] bg-dark-blue-testimonials font-[raleway] w-[30rem]">
        <p className="my-[1.3rem]">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex ">
          <img
            src={img}
            alt="img"
            className="rounded-full h-[2.5rem] mr-[1rem]"
          />
          <div className="flex flex-col">
            <span>{name}</span>
            <span>Founder & CEO, Huddle</span>
          </div>
        </div>
      </div>
    </>
  );
};
