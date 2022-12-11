import React from "react";
import Footer from "./Footer";

function Contacts() {
  function handleForm(e) {
    e.preventDefault();
    alert("Thanks for your message!");
  }
  return (
    <div className="contactUsPage">
      <div className="contactForm">
        <h2 className="secondHeadCont">Contact Us</h2>
        <p className="pOfCont">
          Say Hello, send us your thoughts about our products or share you ideas
          with our Team!
        </p>
        <form className="myForm">
          <input
            name="firstName"
            id="firstNameInput"
            type="text"
            maxLength={14}
            placeholder="First Name"
          ></input>
          <input
            name="lastName"
            id="lastNameInput"
            type="text"
            maxLength={14}
            placeholder="Last Name"
          ></input>
          <input
            name="email"
            id="emailInput"
            type="email"
            placeholder="Email"
          ></input>
          <input
            placeholder="Subject"
            name="subject"
            id="subjectInput"
            type="text"
          ></input>
          <textarea
            placeholder="Message"
            name="message"
            id="messageInput"
            type="textarea"
            maxLength={140}
          ></textarea>
          <button className="buttonSub" onClick={handleForm}>
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
