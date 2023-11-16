import "./navbar.css";
export default function Navbar() {
  const menuItems = ["Features", "Team", "Sign In"];
  return (
    <nav className="flex justify-between items-center m-auto w-[90%]">
      <img
        src="your-image-source.jpg" // Replace with your image source
        alt="Logo"
        className="h-16 w-16" // Adjust height and width as needed
      />
      <ul className="flex items-center space-x-14 text-[1.2rem]">
        {menuItems.map((e, i) => (
          <li key={i} className="text-white">
            <a href="#">{e}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
