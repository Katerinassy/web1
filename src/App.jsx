import "./App.css";
import logo from "./images/Logo.svg";
import search from "./images/SearchIcon.svg";
import cart from "./images/CartIcon.svg";
import aeroww from "./images/Aerrow.png";
import image_1 from "./images/1.png";
import image_2 from "./images/2.png";

function App() {
  return (
    <>
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
      <div className="block_one">
        <div className="header_block2">
        <p className="naturalfood">100% Natural Food</p>
        <p className="choose">Choose the best <br /> healthier way <br />  of life</p>
        <button className="button_block_one">Explore Now
          <img src={aeroww} alt=""  />
        </button>
        </div>    
    
      </div>
      <div className="block_two">
        
          <img src={image_1} alt=""></img>
          <img src={image_2} alt=""></img>
        
      </div>
 </div>
    </>
  );
}

export default App;
