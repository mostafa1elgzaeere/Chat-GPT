import React from 'react';
import logo from "../../assets/logo.svg"
import "./Navbar.css"
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from 'react';

const Navbar = () => {

    const handleClickScroll = (e) => {
        const element = document.getElementById(e);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


     const [MenuToggle, setMenuToggle] = useState(false);



    return (
        <div className='navbar'>
            
            <div className="logo">
                <img src={logo} />
            </div>
            
            <div className="links">
                <p href="#" onClick={()=>handleClickScroll("home")}>Home</p>
                <p href="#" onClick={()=>handleClickScroll("what")}>What is GPT?</p>
                <p href="#" onClick={()=>handleClickScroll("featuer")}>Open AI</p>
                <p href="#" onClick={()=>handleClickScroll("posi")}>Case Studies</p>
                <p href="#" onClick={()=>handleClickScroll("blog")}>Library</p>
            </div>

           <div className="sign">
                <a href='#'>Sign in</a>
                <button className='sign-up'>Sign up</button>
           </div>



        {MenuToggle&&
                   <div className='mobile-nav scale-up-ver-center'>
                    <p href="#" onClick={()=>handleClickScroll("home")}>Home</p>
                    <p href="#" onClick={()=>handleClickScroll("what")}>What is GPT?</p>
                    <p href="#" onClick={()=>handleClickScroll("featuer")}>Open AI</p>
                    <p href="#" onClick={()=>handleClickScroll("posi")}>Case Studies</p>
                    <a href='#'>Sign in</a>
                    <button className='sign-up'>Sign up</button>
                   </div>
        }


        {MenuToggle?        
        <AiOutlineClose className='menu-icon' onClick={()=>setMenuToggle(false)}/>:
        <BiMenuAltRight className='menu-icon' onClick={()=>setMenuToggle(true)}/>
        
        
        }
            

        </div>
    );
}

export default Navbar;


