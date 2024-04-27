import React from "react";
import trustpilot from "../img/trustpilot.svg";
import star from "../img/star.svg";
import foodImage from "../img/foodImage.png";
import graph from "../img/Graph.svg";
import foodMini from "../img/foodMini.png";

export default function MainHeader() {
    return (
        <section>
            <div className="container mainHeader">
                <div>
                    <p className="OverUser">Over 1000 users</p>
                    <h1>Enjoy Foods All Over The <span>World</span></h1>
                    <p className="mainP">EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. <span>Get a $20 bonus.</span></p>
                    <div className="getButton">
                            <button className="getStartedButton">Get Started</button>
                            <button className="goProButton">Go Pro</button>
                    </div>
                    <div className="mainRait">
                        <img src={trustpilot} className="trustpilot"></img>
                        <div>
                            <img src={star} className="star"></img>
                            <img src={star} className="star"></img>
                            <img src={star} className="star"></img>
                            <img src={star} className="star"></img>
                            <img src={star} className="star"></img>
                        </div>
                        <span>4900+</span>
                    </div>
                </div>
                <div className="foodMain">
                    <div className="foodMini">
                        <img src={foodMini}></img>
                        <div className="foodMiniDiv">
                            <p className="foodMiniName">Chicken Hell</p>
                            <p className="foodMiniOp">On The Way</p>
                            <p className="foodMiniTime"><time>3:09 PM</time></p>
                        </div>
                    </div>

                    <div>
                        <img src={foodImage} className="foodImg"></img>
                    </div>
                    
                    <div className="rectangle">
                        <img src={graph} className="graph"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}