import "./main_2.css";
// assets
import main_2Img from "/illustration-stay-productive.png";
import linkLogo from "/icon-arrow.svg";

export default function Main_2() {
  return (
    <>
      <article id="Main_2">
        <section id="Main_2-s1">
          <img src={main_2Img} alt="img" />
        </section>
        <section id="Main_2-s2">
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs. Securely share files
          </p>
          <p>
            and folders with friends, family and colleagues for live
            collaboration. No email attachments required .
          </p>
          <div>
            <a href="#">See how Fylo works Fylo works</a>
            <img src={linkLogo} alt="img" className="mt-1" />
          </div>
        </section>
      </article>
    </>
  );
}
