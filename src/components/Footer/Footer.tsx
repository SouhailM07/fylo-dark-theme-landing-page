import "./footer.css";
// components
import { Logo } from "../../components";
// assets
import phoneLogo from "../../../public/icon-phone.svg";
import emailLogo from "../../../public/icon-email.svg";

export default function Footer() {
  let ul_2 = [
    { img: phoneLogo, txt: "+1-543-123-4567" },
    { img: emailLogo, txt: " example@fylo.com" },
  ];
  return (
    <>
      <footer className="grid grid-cols-5 items-center mt-[10rem] text-white">
        <div>
          <Logo />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <ul>
          {ul_2.map((e, i) => {
            return (
              <li key={i} className="flex ">
                <img src={e.img} alt="" />
                <span>{e.txt}</span>
              </li>
            );
          })}
        </ul>
        <div></div>
        <div></div>
        <div></div>
      </footer>
    </>
  );
}
