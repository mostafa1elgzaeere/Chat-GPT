import React from 'react';
import "./Possibility.css";
import img from "../../assets/possibility.png"
import CTA from '../../components/CTA/CTA';

const Possibility = () => {
    return (
        <>
                <div className='pos-container' id='posi'>
                    <div className="img">
                        <img src={img} alt="" />
                    </div>

                    <div className="pos-details">
                        <p>Request Early Access to Get Started</p>
                        <h2>The possibilities are beyond your imagination</h2>
                        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                        <p>Request Early Access to Get Started</p>
                    </div>
                </div>
        
                <CTA/>
        </>

    );
}

export default Possibility;
