import React, { useState } from "react";
import logo from "../img/Logo.svg";
import Modal from "./Modal";

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <header>
            <div className="container">
                <div className="header-main">
                    <div className="logo-div">
                        <a href="#">
                            <img src={logo} alt="Logo"></img>
                            <span>eatly</span>
                        </a>
                    </div>
                    <nav>
                        <ul className="nav-list">
                            <li>
                                <a href="#">Menu</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="log-reg">
                        <button className="login" onClick={openModal}>Login</button>
                        <button className="register" onClick={openModal}>Sign up</button>
                    </div>
                </div>
            </div>
            {isModalOpen && <Modal closeModal={closeModal} />}
        </header>
    );
}
