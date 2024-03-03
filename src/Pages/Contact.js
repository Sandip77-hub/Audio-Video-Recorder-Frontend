import React, { useState } from "react";
import Navbar from "../components/Navbar";
import './Contact.css';

export default function Contact() {

  return (
    <>
    <Navbar></Navbar>
    <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <div>
                    <h3>Contact Information</h3>
                    <p>Wildlife Recognition & Surveillance System</p>
                    <p>Dream Wildlife Conservation,Nepal</p>
                    <p>Phone: +977-9803515245</p>
                    <p>Email: info@wildlife.com</p>
                </div>
                <div>
                    <h3>Support Channels</h3>
                    <p>Email: supportwildlife@gmail.com</p>
                    <p>Phone:+011-8596224</p>
                    <p>Online Chat Support: Visit our website</p>
                </div>
            </div>
            <div className="feedback-form">
                <h3>Feedback and Inquiries</h3>
                <form>
                    <label>Name:</label>
                    <input type="text" />
                    <label>Email:</label>
                    <input type="email" />
                    <label>Message:</label>
                    <textarea></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="social-media">
                <h3>Connect with Us</h3>
                <p>Follow us on social media to stay updated:</p>
                <ul className="social-site">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </div>

    
    </>
  );
}
