import "./hero.css";
// assets
import heroImg from "/illustration-intro.png";
import heroImg2 from "/bg-curvy-desktop.svg";
import heroImg2_mobile from "/bg-curvy-mobile.svg";

export default function Hero() {
  return (
    <>
      <header className="">
        <div className="translate-y-[24rem] md:translate-y-[16rem] z-[1] flex flex-col items-center">
          <img src={heroImg} alt="" className="md:h-[33rem]  xs:h-[18rem]" />
          <div id="HeroContainer">
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p className="md:!my-[2rem]">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <button className="">Get Started</button>
          </div>
        </div>
        <img
          src={heroImg2}
          alt=""
          className="relative z-[0] hidden md:block w-full h-[30rem]"
        />
        <div className="block md:hidden h-[24rem] w-full ">
          <img
            src={heroImg2_mobile}
            alt=""
            className="relative z-[0] w-full m-auto"
          />
          <div className="h-full bg-[#181f2b]"></div>
        </div>
      </header>
    </>
  );
}
