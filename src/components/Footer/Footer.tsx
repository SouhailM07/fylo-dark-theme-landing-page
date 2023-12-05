import "./footer.css";
// components
import { Logo } from "../../components";
// assets
import logoImg from "/logo.svg";
import phoneLogo from "/icon-phone.svg";
import emailLogo from "/icon-email.svg";
import facebookLogo from "/bxl-facebook.svg";
import twitterLogo from "/bxl-twitter.svg";
import instagramLogo from "/bxl-instagram.svg";
import locationLogo from "/icon-location.svg";

export default function Footer() {
  return (
    <>
      <footer className="px-[2rem] md:px-[7rem] pb-[5rem] md:pb-[10rem] place-items-center items-center pt-[14rem] text-white bg-dark-blue-footer border-2 border-red-500">
        <div className="">
          <img
            src={logoImg}
            alt="Logo"
            className="md:h-auto md:w-auto h-[4rem]"
          />
        </div>
        <div className=" mt-[2rem] flex-col md:flex-row flex flex-wrap justify-between">
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
      <div className="flex space-x-10  my-[1rem] ">
        <img src={locationLogo} alt="" className="h-[1.5rem]" />
        <p className=" w-[20rem] ">
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
      <ul className="md:mx-2">
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
      <div className="h-[18rem] my-[4rem] justify-between flex flex-col md:flex-row md:space-x-[3rem] font-[overPass] font-bold md:mx-2">
        <ul className="flex flex-col space-y-3 md:space-y-5 ">
          {ul_3[0].map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
        <ul className="flex flex-col space-y-3 md:space-y-5 ">
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
      <ul className="flex m-auto space-x-7">
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
