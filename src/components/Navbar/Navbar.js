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
        <ul className="nav-links" >
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
         >{menuIcon === false ?  <FiMenu/> : <ImCross/>}
         </button>
    </div>
    <ul className={menuIcon === true ? `nav-link-mobile z-50` : 'hidden'} >
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/Service"><li>Destinations</li></Link>
            <Link to="/Service"><li>Tour package</li></Link>
            <Link to="/Service"><li>Gallery</li></Link>
            <Link to=""><li>Contact Us</li></Link>
    </ul>
 </nav>
  )
}

export default Navbar
