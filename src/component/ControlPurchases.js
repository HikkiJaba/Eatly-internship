import React from "react";
import foodImage from "../img/Food-Image.png";
import foodImage1 from "../img/Food-Image-1.png";
import foodImage2 from "../img/Food-Image-2.png";
import icon from "../img/icon.svg";
import icon2 from "../img/icon2.svg";
import divider from "../img/divider.svg";
import divider2 from "../img/divider2.svg";

export default function ControlPurchases() {
    return (
        <section>
            <div className="container topRestaurantsContainer controlPurchasesContainer">
                <div className="controlPurchasesContainerLeft">
                    <h2>Contol <span>Purchases</span> Via Dashboard</h2>
                
                    <ul>
                        <li>
                            <img src={foodImage} className="foodImage"></img>
                            <div className="controlPurchasesInfo">
                                <div className="controlPurchasesName">
                                    <h3>Chicken Hell</h3>
                                    <p>On The Way</p>
                                </div>
                                <p className="controlPurchasesTime"><time>3:09 PM</time></p>
                            </div>
                        </li>
                        <li>
                            <img src={foodImage1} className="foodImage1"></img>
                            <div className="controlPurchasesInfo">
                                <div className="controlPurchasesName">
                                    <h3>Swe Dish</h3>
                                    <p><span>Delivered</span></p>
                                </div>
                                <p className="controlPurchasesTime">Yesterday</p>
                            </div> 
                        </li>
                        <li>
                            <img src={foodImage2} className="foodImage2"></img>
                            <div className="controlPurchasesInfo">
                                <div className="controlPurchasesName">
                                    <h3>Fish Hell Veg</h3>
                                    <p>Cancelled</p>
                                </div>
                                <p className="controlPurchasesTime">Yesterday</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>

                </div>
                <div className="controlPurchasesContainerRight">
                    <div>
                        <div className="controlPurchasesContainerRightHeader">
                            <h3>Purchases</h3>
                            <select name="time" className="timeSelect">
                                <option>This mounth</option>
                                <option>This week</option>
                                <option>This year</option>
                            </select>
                        </div>
                    </div>
                    <div className="expense">
                        <div className="expenseInfo">
                            <img src={icon}></img>
                            <div className="expenseInfoDiv">
                                <h4>Expense</h4>
                                <p><span>Increased By 10%</span></p>
                            </div>
                            <div className="price">$409.00</div>
                        </div>
                        <img src={divider}></img>
                    </div>
                    <div className="vocherUsage">
                        <div className="vocherUsageInfo">
                            <img src={icon2}></img>
                            <div className="vocherUsageInfoDiv">
                                <h4>Vocher Usage</h4>
                                <p><span>Increased By 5%</span></p>
                            </div>
                            <div className="price">$45.78</div>
                        </div>
                        <img src={divider2}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}