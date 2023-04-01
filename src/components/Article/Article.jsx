import React, { useState } from 'react';
import img1 from "../../assets/blog01.png"
import img2 from "../../assets/blog02.png"
import img3 from "../../assets/blog03.png"
import img4 from "../../assets/blog04.png"
import img5 from "../../assets/blog05.png"

const Article = () => {
    let [art,setArts]=useState([
        {num:"div1",img:img1},
        {num:"div2",img:img2},
        {num:"div3",img:img3},
        {num:"div4",img:img4},
        {num:"div5",img:img5},
    ])
    return (
        <>
            {art.map((e)=>
                    <div class={e.num}>
                    <img src={e.img} alt="" />
                    <p>Sep 26, 2021</p>
                    <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                    <p>Read Full Article</p>
                </div>
            )}

            
        </>
    );
}

export default Article;
