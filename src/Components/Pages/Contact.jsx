import React, { useState } from "react";
import "../css/contact.css";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    websiteType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting us.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      websiteType: "",
      message: "",
    });
  };

  return (
    <section className="portfolio-contact-section">
      <div className="portfolio-contact-container">

        {/* LEFT INFO PANEL  */}
        <div className="contact-info animate-left">
          <h2>Contact Information </h2>
          <p>
            Kindly leave your name, address, and a short message regarding your inquiry. I’ll get back to you as soon as possible. Thank you for visiting my portfolio!</p>

          <div className="info-item">
            <strong>📞 Phone:</strong> +91 9161126257
          </div>
          <div className="info-item">
            <strong>📤 Email: </strong> veraditya9161@gmail.com
          </div>
          <div className="info-item">
            <strong>📍Address:</strong> Greater Noida, Uttar Pradesh, India
          </div>

          <div className="social-icons">
            <a href="https://github.com/Advarma0069"><FaGithub /></a>
            <a href="#"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/aditya-varma-5866972ab/"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>

          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
        </div>

        {/*  RIGHT FORM PANEL  */}
        <div className="contact-form-panel animate-right">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First Name"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="input-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
