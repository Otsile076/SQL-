// firstPage.jsx
import React from 'react';
import Header from "./Components/header/Index";
import AllCards from "./Components/Cards/Index";
import { info } from "./Components/help/Index";
import Footer from './Components/Footer/Index';

export default function firstPage() {
    return (
        <div>
            <Header />
            <div className="buttons">
                <button onClick={info}>Help</button>
                <button onClick={AllCards}>My Cards</button>
                <button onClick={popints}>My Points</button>
                <button onClick={settings}>Settings</button>
                <button onClick={about}>About</button>
            </div>
            <h1>Welcome!!!</h1>
            <p>Welcome to my welcome page. This is the first of many posts that will get me to understand all this better</p>
            <AllCards />
            <Footer/>
        </div>
    );
}
