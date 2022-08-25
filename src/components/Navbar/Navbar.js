import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { ImCross ,ImMenu} from "react-icons/im";
import '../../assets/nav.css'
const Navbar = () => {
const [menuIcon, setMenuIcon] = useState(false)  
return (
 <nav className='navbar'>
    <div className='container'>
        <h3 className='logo'>Logo</h3>
        <ul 
        className={menuIcon ? 'nav-link-mobile' : 'nav-links'} 
        onClick={()=>setMenuIcon(false)}
        >
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/Service"><li>Destinations</li></Link>
            <Link to="/Service"><li>Tour package</li></Link>
            <Link to="/Service"><li>Gallery</li></Link>
            <Link to=""><li>Contact Us</li></Link>
        </ul>
        <button 
         className='mobile-menu-icon hidden'
         onClick={()=>setMenuIcon(!menuIcon)}
         >{menuIcon === false ?  <FiMenu/> : <ImCross/>}</button>
    </div>
 </nav>
  )
}

export default Navbar
