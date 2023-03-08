import { useState } from "react";
import iconPhone from "../assets/phone.png"
import iconMail from "../assets/mail.png"
import iconAddress from "../assets/address.png"


function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${name}! Your message has not been sent. I am currently developing a back-end system. If it is finished, I will let you know later.`);
    // ยังไม่ทำส่วนที่เป็นหลังบ้าน
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container-contactMePage">
      <h1 className="text-contact-me">Contact Me</h1>
      <div className="container-contact-me">
        <div className="leftContent">
          <div className="contact-item">
            <img src={iconPhone} alt="icon-telephone" />
            <p>+66 84657 6439</p>
          </div>
          <div className="contact-item">
            <img src={iconMail} alt="icon-email" />
            <p>bestbest116@gmail.com</p>
          </div>
          <div className="contact-item">
            <img src={iconAddress} alt="icon-address" />
            <div className="my-address">
                <p>7/45 Soi 19, Ratchadapisek Rd.</p>
                <p>Bangkok Yai, Wat Tha Phra</p>
                <p>Bangkok, 10600</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="rightContent">
          <form onSubmit={handleSubmit}>
            <p>Have a Question? or Just want to say Hi?</p>
            <p>Drop me message!</p>
        <div className="container-form">
            <div className="container-input">
              <label htmlFor="name">Name</label>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className="container-input">
              <label htmlFor="email">Email Address</label>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className="container-input">
              <label htmlFor="message">Message</label>
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter you message here"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows="5"
                  cols="10"
                  required
                />
              </div>
            </div>
        </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
