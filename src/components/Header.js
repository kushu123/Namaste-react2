import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
 
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
      <div className ="header">
        <img className ="bg-image" src ={LOGO_URL}/>
        <div className="nav-items">
          <ul>
            <li className="lang-icon"> Home </li>
            <li className="lang-icon">About Us</li>
            <li className="lang-icon">Contact Us</li>
            <li className="lang-icon">Cart</li>
            <button className="login" onClick = {() => {
              btnNameReact ==="Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
            }}><b>{btnNameReact}</b></button>
          </ul>
          </div>
        <div className ="content-header">
          <h1 className="content-inside1">
           <b>GRUBHUB</b>
          </h1>
          <h3 className="content-inside2">
            Find the best restaurants, cafes and bars in 
            India
          </h3>
        </div>
      </div>
    )
  };

  export default Header;