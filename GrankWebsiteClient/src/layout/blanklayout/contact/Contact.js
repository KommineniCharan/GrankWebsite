import React, { useRef } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hl9b4eu",
        "template_7hvcr1h",
        form.current,
        "2FGqdX5RSWZ3C3xtf"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email has been send");
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="section-top">
        <Header />
        {/* banner start */}
        {/* <div
          className="creative-banner-display-ads"
          style={{
            backgroundColor: "rgba(0, 123, 255, 0.25)",
            position: "relative",
          }}
        >
          <img
            className="img-fluid w-100 mobile-none"
            src="assest/photos/social-media/social-media-banner4.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/social-media/social-media-banner4.png"
            alt="G-Rank"
          />

          <div className="social-banner-div">
            <h1 className="waviy ">
              <span>Contact Us</span>
            </h1>
          </div>
        </div> */}
        {/* banner end */}
        <section className="contact-us-section">
          <div className="container contact-us-contain">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-7 align-self-center">
                <img
                  className="img-fluid w-100 contact-img"
                  src="assest/photos/contact-us/contact-us2.png"
                  alt="G-Rank"
                />
              </div>
              <div className="col-12 col-md-5 col-lg-5 ">
                <div className="contact-us-form">
                  <h1>Get In Touch</h1>
                  <p>
                    Have an enquire or some feedback for us?
                    <br />
                    Fill out the form below to contact our team.
                  </p>
                  <form ref={form} onSubmit={sendEmail}>
                    <h3>
                      <label>Name</label>
                    </h3>
                    <input type="text" name="user_name" />
                    <h3>
                      <label>Email</label>
                    </h3>
                    <input type="email" name="user_email" />
                    <h3>
                      <label>Message</label>
                    </h3>
                    <textarea name="message" id="myInput" />
                    <h4>
                      <button type="submit">send</button>
                    </h4>
                  </form>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="contact-address">
                  <p>
                    1-8-382, Ground Floor, Queen’s Plaza,
                    <br /> Begumpet,Hyderabad – 500003
                  </p>
                  <h1>+91 8522953903</h1>
                  <h2>server@grank.co.in</h2>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="contact-address">
                  <p>
                    2nd Floor, R K Lake Tower, Service Road, Subramani Nagar,
                    <br />
                    Guddadahalli, Hebbal, Bengaluru, Karnataka-560024
                  </p>
                  <h1>+91 8522953903</h1>
                  <h2>server@grank.co.in</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
