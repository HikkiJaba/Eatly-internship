import React from "react";
import foodImage from "../img/Food-Image.png";
import foodImage1 from "../img/Food-Image-1.png";
import foodImage2 from "../img/Food-Image-2.png";
import vector from "../img/Vector.svg";
import vector2 from "../img/Vector2.svg";
import star from "../img/StarRest.svg";
import plus from "../img/Add.svg";
import like from "../img/Heart.svg";

export default function TopDishes() {
    return (
        <section>
            <div className="container topRestaurantsContainer">
                <h2>Our Top <span>Dishes</span></h2>
                <div className="topRestaurants">
                    <div className="topRestaurantsDiv">
                        <div className="likeDiv">
                            <button><img src={like}></img></button>
                        </div>
                        <div className="topRestaurantImg">
                            <img src={foodImage}></img>
                        </div>
                        
                        <div>
                            <div className="typeFood1">Healthy</div>
                            <h3>Chiken Hell</h3>
                            <div className="footerInfoFood">
                                    <div className="footerInfoTime"><time>24min</time></div>
                                    <img src={star} className="star"></img>
                                    <div className="footerInfoRait">4.8</div>
                            </div>
                            <div className="infoTopRestaurants">
                                <div>$12<span>.99</span></div>
                                <button><img src={plus}></img></button>
                            </div>
                        </div>
                    </div>

                    <div className="topRestaurantsDiv">
                        <div className="likeDiv">
                            <button><img src={like}></img></button>
                        </div>
                        <div className="topRestaurantImg">
                            <img src={foodImage1}></img>
                        </div>

                        <div>
                            <div className="typeFood2">Trending</div>
                            <h3>Swe Dish</h3>
                            <div className="footerInfoFood">
                                    <div className="footerInfoTime"><time>24min</time></div>
                                    <img src={star} className="star"></img>
                                    <div className="footerInfoRait">4.8</div>
                            </div>
                            <div className="infoTopRestaurants">
                                <div>$12<span>.99</span></div>
                                <button><img src={plus}></img></button>
                            </div> 
                        </div>
                    </div>

                    <div className="topRestaurantsDiv">
                        <div className="likeDiv">
                            <button><img src={like}></img></button>
                        </div>
                        <div className="topRestaurantImg">
                            <img src={foodImage2}></img>
                        </div>
                        <div>
                            <div className="typeFood3">Healthy</div>
                            <h3>Swe Dish</h3>
                            <div className="footerInfoFood">
                                    <div className="footerInfoTime"><time>24min</time></div>
                                    <img src={star} className="star"></img>
                                    <div className="footerInfoRait">4.8</div>
                            </div>
                            <div className="infoTopRestaurants">
                                <div>$12<span>.99</span></div>
                                <button><img src={plus}></img></button>
                            </div> 
                        </div>
                    </div>

                    <div className="topRestaurantsDiv">
                        <div className="likeDiv">
                            <button><img src={like}></img></button>
                        </div>
                        <div className="topRestaurantImg">
                            <img src={foodImage}></img>
                        </div>

                        <div>
                            <div className="typeFood1">Healthy</div>
                            <h3>Chiken Hell</h3>
                            <div className="footerInfoFood">
                                    <div className="footerInfoTime"><time>24min</time></div>
                                    <img src={star} className="star"></img>
                                    <div className="footerInfoRait">4.8</div>
                            </div> 
                            <div className="infoTopRestaurants">
                                <div>$12<span>.99</span></div>
                                <button><img src={plus}></img></button>
                            </div>
                        </div>
                    </div>

                    <div className="topRestaurantsDiv">
                        <div className="likeDiv">
                            <button><img src={like}></img></button>
                        </div>
                        <div className="topRestaurantImg">
                            <img src={foodImage1}></img>
                        </div>
                        <div>
                            <div className="typeFood2">Trending</div>
                            <h3>Swe Dish</h3>
                            <div className="footerInfoFood">
                                    <div className="footerInfoTime"><time>24min</time></div>
                                    <img src={star} className="star"></img>
                                    <div className="footerInfoRait">4.8</div>
                            </div>
                            <div className="infoTopRestaurants">
                                <div>$12<span>.99</span></div>
                                <button><img src={plus}></img></button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="viewAll">
                    <a href="#" className="viewAllA">View All</a>
                    <img src={vector} className="vector"></img>
                    <img src={vector2} className="vector2"></img>
                </div>
            </div>
        </section>
    )
}