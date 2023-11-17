import "./footer.css";
// components
import { Logo } from "../../components";
// assets
import phoneLogo from "../../../public/icon-phone.svg";
import emailLogo from "../../../public/icon-email.svg";
import facebookLogo from "../../../public/bxl-facebook.svg";
import twitterLogo from "../../../public/bxl-twitter.svg";
import instagramLogo from "../../../public/bxl-instagram.svg";
import locationLogo from "../../../public/icon-location.svg";

export default function Footer() {
  return (
    <>
      <footer className="px-[7rem] pb-[10rem] place-items-center items-center pt-[14rem] text-white bg-dark-blue-footer border-2 border-red-500">
        <div>
          <Logo />
        </div>
        <div className=" mt-[1rem] flex flex-wrap justify-between">
          <F1 />
          <F2 />
          <F3 />
          <F4 />
        </div>
      </footer>
    </>
  );
}

/*========================================================================================*/
// ! small components
/*========================================================================================*/
let F1 = () => {
  return (
    <>
      <div className="flex space-x-4">
        <img src={locationLogo} alt="" className="h-[1.5rem]" />
        <p className=" w-[20rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
    </>
  );
};

let F2 = () => {
  let ul_2 = [
    { img: phoneLogo, txt: "+1-543-123-4567" },
    { img: emailLogo, txt: " example@fylo.com" },
  ];
  return (
    <>
      <ul className="mx-2">
        {ul_2.map((e, i) => {
          return (
            <li key={i} className="flex  items-center">
              <img
                src={e.img}
                alt=""
                className="h-[1.2rem] my-[8px] mr-[2rem]"
              />
              <span>{e.txt}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

let F3 = () => {
  let ul_3 = [
    ["About Us", "Jobs", "Press", "Blog"],
    ["Contact Us", "Terms", "Privacy"],
  ];
  return (
    <>
      <div className="flex space-x-[3rem] font-[overPass] font-bold mx-2">
        <ul className="flex flex-col space-y-5 ">
          {ul_3[0].map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
        <ul className="flex flex-col space-y-5 ">
          {ul_3[1].map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

let F4 = () => {
  let ul_4 = [facebookLogo, twitterLogo, instagramLogo];

  return (
    <>
      <ul className="flex space-x-7">
        {ul_4.map((e, i) => {
          return (
            <li key={i}>
              <img
                src={e}
                alt="img"
                className="border-white border-2 rounded-full items-start p-1"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
