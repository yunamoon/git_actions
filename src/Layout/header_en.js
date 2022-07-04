/* eslint-disable */
import react, { useRef ,useEffect } from "react";
import {Link , Route , Switch} from 'react-router-dom';
import { useState } from "react/cjs/react.development";
import logo_bl from '../img/logo/spacefarm_logo_bl.svg';
import logo_wh from '../img/logo/spacefarm_logo(bg_bk)_horizontal.svg';
import header_logo from '../img/logo/header_logo.svg';
import header_only from '../img/logo/spacefarm_logo_only.svg'
function Header(scroll , language) {

    return (


        <div className={language.header  ==0 ? 'header' : 'header header-sub'}>
        {/* desktop nav HTML ----------------------------------------------------- */}
        <img className="logo"src={logo_wh}></img> 
          <nav className="desktop">
            <span><Link to ='/en'> Home </Link> </span> 
            <span><Link to ='/tthing_en'>smartTThing</Link>  </span> 
            <span><Link to ='/member_en'>TeamSpacefarm</Link></span> 
            <span className="language"> <Link to ='/'> KO</Link></span> 
            <span className="language"><Link to ='/en'>EN</Link></span> 
          </nav>
        {/* mobile nav HTML ----------------------------------------------------- */}
          <img className="mobile_logo_img" src={header_only }></img>
          <nav className="mobile">
          <span> <Link to ='/en'><i className="fas fa-home"></i></Link> </span> 
          <span> <Link to ='/member_en'> <i className="fas fa-user-friends"></i></Link></span> 
          <span> <Link to ='/tthing_en'>smartTThing</Link>   </span> 
         
          <span className="language">  <Link to ='/'> KO</Link></span> 
          <span className="language">   <Link to ='/en'>EN</Link></span> 
          </nav>
      
</div> 

      );
}




export default Header;