import "./navbar.css";
//components
import { Logo } from "../../components";
export default function Navbar() {
  const menuItems = ["Features", "Team", "Sign In"];
  return (
    <nav className="flex justify-between items-center m-auto w-[90%] mt-[3rem]">
      <Logo />
      <ul className="flex items-center space-x-14 text-[1.3rem]">
        {menuItems.map((e, i) => (
          <li key={i} className="text-white">
            <a href="#">{e}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
