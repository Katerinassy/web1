import "./App.css";
import logo from "./images/Logo.svg";
import search from "./images/SearchIcon.svg";
import cart from "./images/CartIcon.svg";

function App() {
  return (
    <div className="cont">
      <div className="header">
        < img src={logo} alt="" />
           
        <h2>Organinc</h2>
        <ul className="tab">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
        </ul>
        <div className="block_input">
          <input type="text"  className="inp_block"/>
          <img src={search} alt="" />
        </div>
        <div className="cart">
          <img src={cart} alt="" />
          <p>cart(0)</p>
        </div>
      </div>
    </div>
  );
}

export default App;
