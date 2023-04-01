import React from 'react';
import {Header,WhatGPT3,Featuers,Possibility, Blog, Footer} from "./containers/index";
import "./App.css"
const App = () => {
    return (
        <div>
            <Header/>
            <WhatGPT3/>
            <Featuers/>
            <Possibility/>
            <Blog/>
            <Footer/>
        </div>
    );
}

export default App;
