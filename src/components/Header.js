import { LOGO_URL } from '../utils/constants';
import { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import  useOnlineStatus  from "../utils/useOnlineStatus";
import UserContext from '../utils/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faAddressCard, faAddressBook, faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

 
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  //if no dependency array then => useEffect is called on every render.
  //if dependency array is empty [] => useEffcet is called on initial render(just once).
  //if dependency array is [btnNameReact] => called everytime when btnNameReact is updated.
  useEffect (() => {
    console.log("useEffectCalled");
  },[btnNameReact]);

  return (
    <div className="relative bg-gray-900 flex flex-col">
      <div className="relative w-full h-[65vh]"> {/* Set the height of the image container */}
        <img className="w-full h-full object-cover" src={LOGO_URL} alt="Logo" /> {/* Ensure the image fills the container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
          <div className="text-center">
            <h1 style={{ color: 'white', fontSize: '3.6rem' }}>
              <b>GRUBHUB</b>
            </h1>
            <h3 style={{ color: 'white', fontSize: '3.0rem' }}>
              Find the best restaurants, cafes, and bars in India
            </h3>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-20 ">
          <ul className="flex p-4">
            <li className="px-4" style={{color:"White"}}>Online Status: {onlineStatus ? '✅' : '❌'}</li>
            <li className="px-4" style={{color:"White"}}><Link to="/"><FontAwesomeIcon icon={faHouse}/> Home</Link></li>
            <li className="px-4" style={{color:"White"}}><Link to="/about"><FontAwesomeIcon icon={faAddressCard} /> About Us</Link></li>
            <li className="px-4" style={{color:"White"}}><Link to="/contact"><FontAwesomeIcon icon={faAddressBook} /> Contact Us</Link></li>
            <li className="px-4" style={{color:"White"}}><Link to="/grocery"><FontAwesomeIcon icon={faBagShopping} /> Grocery</Link></li>
            <li className="px-4" style={{color:"White"}}><Link to ="/cart"><FontAwesomeIcon icon={faCartShopping} /> Cart ({cartItems.length})</Link></li>
            <li className="px-4">
              <button style={{color:"White"}} onClick={() => {
                setBtnNameReact(prev => (prev === 'Login' ? 'Logout' : 'Login'));
              }}>{btnNameReact}</button>
            </li>
            <li className="px-4 font-bold" style={{color:"White"}}>{loggedInUser}</li>
          </ul>
        </div>
      </div>
      <div className="flex-grow"></div> {/* This ensures the rest of the space is used up */}
    </div>
  );
  };

  export default Header;