import "./main_3.css";
// assets
import main_3_img_1 from "/profile-1.jpg";
import main_3_img_2 from "/profile-2.jpg";
import main_3_img_3 from "/profile-3.jpg";
import quoteImg from "/bg-quotes.png";

export default function Main_3() {
  let arrOfCards = [
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
      <article id="main_3">
        <div id="main_3-container">
          <div>
            <img id="main_3-quote" src={quoteImg} alt="img" />
            <CommentCard img={main_3_img_1} name="Satish Patel" />
          </div>
          {arrOfCards.map((e, i) => {
            return <CommentCard key={i} img={e.img} name={e.name} />;
          })}
        </div>
      </article>
    </>
  );
}

const CommentCard = ({ img, name }) => {
  return (
    <>
      <div className="CommentCard">
        <p className="">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex">
          <img src={img} alt="img" className="" />
          <div className="flex flex-col">
            <span>{name}</span>
            <span>Founder & CEO, Huddle</span>
          </div>
        </div>
      </div>
    </>
  );
};
