import "./hero.css";
// assets
import heroImg from "../../../public/illustration-intro.png";
import heroImg2 from "../../../public/bg-curvy-desktop.svg";

export default function Hero() {
  return (
    <>
      <header className="">
        <img src={heroImg} alt="" className="md:h-[33rem] xs:h-[18rem]" />
        <div id="HeroContainer">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="">Get Started</button>
        </div>
        {/* <img src={heroImg2} alt="" className="relative z-[0]" /> */}
      </header>
    </>
  );
}
