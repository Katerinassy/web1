import "./App.css";
import logo from "./images/Logo.svg";
import search from "./images/SearchIcon.svg";
import cart from "./images/CartIcon.svg";
import aeroww from "./images/Aerrow.png";
import image_1 from "./images/1.png";
import image_2 from "./images/2.png";
import lemon from "./images/lemon.svg";
import icon from "./images/Icon.svg";
import icon2 from "./images/Icon2.svg";

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
      <div className="block_three">
      <img src={lemon} alt=""></img>
        <div className="text_block_three">
          <p className="naturalfood">About Us</p>
          <p className="header_three">We Believe in Working<br/> Accredited Farmers</p>
          <p className="">Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br/>  been the industry's standard dummy text ever since the 1500s, when an unknown<br/> printer took a galley.</p>
        </div>
        <div className="">
          <img src={icon} alt=""/>
          <p className="text_three">Organic Foods Only</p>
          <p className="">Simply dummy text of the printing and typesetting<br/>  industry. Lorem Ipsum</p>
          <img src={icon2} alt=""/>
          <p className="text_three">Quality Standards</p>
          <p className="">Simply dummy text of the printing and typesetting<br/>  industry. Lorem Ipsum</p>
        </div>
        <button className="button_block_three">Shop Now
          <img src={aeroww} alt=""  />
        </button>
      </div>
 </div>
    </>
  );
}

export default App;
