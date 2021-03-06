import React from "react";
import "./contact.css";
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault()
  
  emailjs.sendForm('gmail', 'template_IoIADSLY', e.target, 'user_i1mm2EoAeQEcM9T8Mp6u0')
    .then((result) => {
        alert('Message Sent')
    }, (error) => {
        console.log(error.text);
    });
}

function Contact() {
  return (
    <div className="contactCont">
      <div class="primaryContact">
        <p className="titleText">Contact Me</p>
        <p className="paraText">
         I'm currently working on multiple projects. Please feel free to contact me if you want to collaborate on anything new and interesting as well.
        </p>
        <p className="paraText">
          You can reach me via <span className="coloured">ashutoshse1@gmail</span>
        </p>
      </div>

      <div className="secondaryContact">
        <div className="contactContents">
            <form onSubmit={sendEmail} className="contactForm">
            <input
                type="text"
                class="form-control"
                id="name"
                placeholder="FULL NAME"
                name="from_name"
            />
            <input
                type="email"
                class="form-control"
                id="email"
                placeholder="EMAIL"
                name="from_email"
            />
            <textarea
                class="form-control"
                rows="10"
                placeholder="MESSAGE"
                name="message"
            ></textarea>
            <input type="submit" className="emailBtn" value="Send" />
            <hr style={{ border: "0.5px solid white" }} />
            </form>
            <div align="center" className="socialbtns">
            <ul>
                <li>
                <a href="https://twitter.com/ashutoshse1" class="fa fa-lg fa-twitter" target="_blank"></a>
                </li>
                <li>
                <a href="https://github.com/ashutoshsenapati" class="fa fa-lg fa-github" target="_blank"></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/ashutoshsenapati/" class="fa fa-lg fa-linkedin" target="_blank"></a>
                </li>
                <li>
                <a href="https://www.instagram.com/ashutosh_5enapati/?hl=en" class="fa fa-lg fa-instagram" target="_blank"></a>
                </li>
            </ul>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
