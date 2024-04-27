import React from "react";

export default function Modal({ closeModal }) {
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal(); 
        }
    };

    return (
        <div className="modalBackground" onClick={handleBackgroundClick}>
            <div className="modalСontent">
                <button className="closeModal" onClick={closeModal} type="button">&times;</button>
                <div className="leftModal">
                    <form>
                        <div className="formDiv">
                            <h3>Sign up to Eatly</h3>
                            <input type="text" name="firstName" className="modalFormInput" placeholder="First Name" />
                            <input type="email" name="email" className="modalFormInput" placeholder="Email" />
                            <input type="password" name="password" className="modalFormInput" placeholder="Password" />
                            <button type="submit" className="modalFormButton">Sign up</button>
                        </div>   
                    </form>
                </div>
            </div>
        </div>
    );
}
