import "./style/input.css";
// import "./App.css";components
import MyContainer from "./components/MyContainer/MyContainer";

function App() {
  let body = document.body;
  body.className = "bg-dark-blue-main";
  return (
    <>
      <MyContainer />
    </>
  );
}
export default App;
