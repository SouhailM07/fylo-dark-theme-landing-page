import "./style/input.css";
import "./App.css";
//components
import MyContainer from "./components/MyContainer/MyContainer";
import { Helmet } from "react-helmet";

function App() {
  let body = document.body;
  body.className = "bg-[#181f2b]";
  return (
    <>
      <Helmet>
        <meta name="description" content="this is front end mentor challenge" />
        <meta
          name="keywords"
          content="landing page ,responsive design,frontendmentor"
        />
        <meta name="author" content="Shadow" />
      </Helmet>
      <MyContainer />
    </>
  );
}
export default App;
