import React from "react";
import "./Features.css";
import Feature from "../../components/Feature/Feature";

function Featuers(){
    return (
        <div className="f-container gradient__bg" id="featuer">
            <div className="left-side">
                <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
                <p>Request Early Access to Get Started</p>
            </div>

            <div className="right-side">
                <Feature/>
            </div>

        </div>
    )
}
export default Featuers;