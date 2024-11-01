import "./style.css";
import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <div className="NavBar">
      <h1>Space Dias</h1>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
}

export default NavBar;
