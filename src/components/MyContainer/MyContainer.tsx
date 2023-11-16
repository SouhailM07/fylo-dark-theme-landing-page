import "./mycontainer.css";
//components
import { Navbar, Hero, Main_1, Footer } from "../../components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Main_1 />
      </main>
      {/* <Footer /> */}
    </>
  );
}
