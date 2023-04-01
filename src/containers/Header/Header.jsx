import React from "react";
import "./Header.css"
import Navbar  from "../../components/Navbar/Navbar";
import Ai_image from "../../assets/ai.png"
import people from "../../assets/people.png"
import google from "../../assets/google.png"
import dropbox from "../../assets/dropbox.png"
import shopify from "../../assets/shopify.png"
import slack from "../../assets/slack.png"
import altlassian from "../../assets/atlassian.png"
import {WhatGPT3,Featuers,Possibility, Blog, Footer} from "../index";



let Header=()=>{
    return (
            <div className="header-container gradient__bg" id="home">
                <Navbar/>
                <div className="header-parent">

                {/* left side */}
                    <div className="side-info">
                        
                        <h2>Let's Build Something amazing with GPT-3 OpenAI</h2>
                        
                        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    
                        <div className="getstated-form">
                            <input type="text" placeholder="Your Email Address" />
                            <button>Get Started</button>
                        </div>

                        <div className="people">
                            <img src={people} className="people-imges" alt="" />
                            <p>1,600 people requested access a visit in last 24 hours</p>
                        </div>

                    </div>


                {/* right side    */}
                    <div className="ai-image-side">
                                        <img src={Ai_image} alt="" />
                                        img
                    </div>

                </div>
 
                {/* bottom side  */}
               <div className="header-partners">
                    <img src={google} />
                    <img src={slack} />
                    <img src={altlassian} />
                    <img src={dropbox} />
                    <img src={shopify} />
               </div>
               
               
            </div>
    )
}

export default Header;