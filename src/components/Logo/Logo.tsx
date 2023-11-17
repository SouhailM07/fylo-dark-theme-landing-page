import "./logo.css";

import logoImg from "../../../public/logo.svg";

export default function Logo() {
  return (
    <>
      <img src={logoImg} alt="Logo" className="md:h-auto md:w-auto h-[2rem]" />
    </>
  );
}
