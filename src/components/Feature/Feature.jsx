import React, { useState } from 'react';

const Feature = () => {
    let [ft,setFt]=useState([
        {title:"Improving end distrusts instantly",
        desc:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."},

        {title:"Become the tended active",
        desc:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."},

        {title:"Message or am nothing",
        desc:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."},

        {title:"Really boy law county",
        desc:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."},

    ])

    return (

<div>
        {ft.map((e)=>
            
             <div className="featuer-part">
     
                <div className="featuer-part-left">
                    <h2>{e.title}</h2>
                </div>

                <div className="featuer-part-right">
                    <p>{e.desc}</p>
                </div>

             </div>
                
        )}
</div>

       
    );
}

export default Feature;
