import "./navbar.css";
//components
import { Logo } from "../../components";
export default function Navbar() {
  const menuItems = ["Features", "Team", "Sign In"];
  return (
    <nav>
      <Logo />
      <ul className="">
        {menuItems.map((e, i) => (
          <li key={i} className="text-white">
            <a href="#">{e}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
