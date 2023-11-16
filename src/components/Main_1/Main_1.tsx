import "./main_1.css";
// assets
import main_1_img_1 from "../../../public/icon-access-anywhere.svg";
import main_1_img_2 from "../../../public/icon-security.svg";
import main_1_img_3 from "../../../public/icon-collaboration.svg";
import main_1_img_4 from "../../../public/icon-any-file.svg";

export default function Main_1() {
  let arrOfCards = [
    {
      img: main_1_img_1,
      title: "Access your files, anywhere",
      txt: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      img: main_1_img_2,
      title: "Security you can trust",
      txt: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      img: main_1_img_3,
      title: "Real-time collaboration",
      txt: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      img: main_1_img_4,
      title: "Store any type of file",
      txt: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];
  return (
    <>
      <article id="Main_1">
        {arrOfCards.map((e, i) => {
          return <TextCard key={i} img={e.img} title={e.title} txt={e.txt} />;
        })}
      </article>
    </>
  );
}

const TextCard = ({ img, title, txt }) => {
  return (
    <>
      <div className="TextCard">
        <img src={img} alt="img" />
        <h2>{title}</h2>
        <p className=" text-[1.2rem]">{txt}</p>
      </div>
    </>
  );
};
