import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import github from '../../img/github.png' 
import linkedinimg from '../../img/linkedinimg.svg' 

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9btn2tc",
        "template_x4bwnej",
        formRef.current,
        "user_f4aAZElQ0Uy5UZpJLaWtc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 7561 018 727
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              vishnusankar@live.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Thodupuzha, Idukki Kerala 685590
            </div>
            <div className="c-info-item">
              <img className="c-icong" src={github} alt="" />
              <a href="https://github.com/vishnusankar95" target="_blank" rel="noreferrer">
              Github</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={linkedinimg} alt="" />
              <a className="c-a" href="https://www.linkedin.com/in/vishnu-sankar-855b72b4/" target="_blank" rel="noreferrer">
              LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Get in touch. Always available for
            the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
