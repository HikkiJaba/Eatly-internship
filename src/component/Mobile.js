import React from "react";
import mobile from "../img/MobileScreen.png";
import arrowDow from "../img/ArrowDow.svg";

export default function Mobile() {
    return (
        <section className="mobile">
            <div className="container mobileContainer">
                <div className="mobilePhoto">
                    <div>
                        <img src={mobile}></img>
                    </div>
                </div>
                <div className="mobileInfo">
                    <div>
                    <h2>Premium <span>Quality</span> For Your Health</h2>
                    <ul>
                        <li>Premium quality food is made with 
                        ingredients that are packed with essential vitamins, minerals.</li>
                        <li>These foods promote overall wellness 
                            by support healthy digestion and boosting immunity</li>
                    </ul>
                    </div>
                    <a href="#" className="phoneButton">
                        Dowloand
                        <img src={arrowDow} className="arrowDow"></img>
                    </a>
                </div>
            </div>
        </section>
    );
}