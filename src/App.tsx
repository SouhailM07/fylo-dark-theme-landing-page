import "./style/input.css";
import "./App.css";
//components
import MyContainer from "./components/MyContainer/MyContainer";

function App() {
  let body = document.body;
  body.className = "bg-[#181f2b]";
  return (
    <>
      <MyContainer />
    </>
  );
}
export default App;
