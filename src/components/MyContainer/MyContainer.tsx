import "./mycontainer.css";
//components
import {
  Navbar,
  Hero,
  Main_1,
  Main_2,
  Main_3,
  Email,
  Footer,
} from "../../components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="mt-[10rem]">
        <Main_1 />
        <Main_2 />
        <Main_3 />
        <Email />
      </main>
      <Footer />
    </>
  );
}
