import React from "react";
import resturent1 from "../img/MaskGroup1.png";
import resturent2 from "../img/resturent2.png";
import star from "../img/StarRest.svg";

export default function TopRestaurants() {
    return (
        <section>
            <div className="container topRestaurantsContainer">
                <h2>Our Top <span>Restaurants</span></h2>
                <div className="containerRest">
                    <div className="cardRest">
                        <div className="resturentImgDiv"><img src={resturent1} className="resturentImg"></img></div>
                        
                        <div className="infoFood">
                            <div className="typeFood1">Healthy</div>
                            <h3>The Chicken King</h3>
                            <div className="footerInfoFood">
                                <div className="footerInfoTime"><time>24min</time></div>
                                <img src={star} className="star"></img>
                                <div className="footerInfoRait">4.8</div>
                            </div> 
                        </div>      
                    </div>
                    <div className="cardRest">
                        <div className="resturentImgDiv"><img src={resturent1} className="resturentImg"></img></div>
                        
                        <div className="infoFood">
                            <div className="typeFood2">Trending</div>
                            <h3>The Chicken King</h3>
                            <div className="footerInfoFood">
                                <div className="footerInfoTime"><time>24min</time></div>
                                <img src={star} className="star"></img>
                                <div className="footerInfoRait">4.9</div>
                            </div> 
                        </div>      
                    </div>
                    <div className="cardRest">
                        <div className="resturentImgDiv"><img src={resturent1} className="resturentImg"></img></div>
                        
                        <div className="infoFood">
                            <div className="typeFood1">Healthy</div>
                            <h3>The Chicken King</h3>
                            <div className="footerInfoFood">
                                <div className="footerInfoTime"><time>24min</time></div>
                                <img src={star} className="star"></img>
                                <div className="footerInfoRait">4.8</div>
                            </div> 
                        </div>      
                    </div>
                </div>
            </div>
        </section>
    )
}