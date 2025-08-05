import React from "react";
import "../css/ContactPage.css"
import Navbar5 from "../component/Navbar5";
import Footer5 from "../component/Footer5";

export default function ContactPage(){
    return(
        <div className="contact-page">
            <Navbar5/>
            <div className="contact-section">
                <p className="small-title">Get Started</p>
                <h1>Get in touch with us.</h1>
                <h1>We're here to assist you.</h1>
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Email Address"/>
                        <input type="tel" placeholder="Phone Number (optional)"/>
                    </div>
                    <textarea placeholder="Message" rows="5"/>
                    <button type="submit">Leave us a Message &rarr;</button>
                </form>
            </div>
            <Footer5/>
        </div>
    )
}