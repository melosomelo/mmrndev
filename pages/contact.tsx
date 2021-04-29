import React, { useMemo, useState } from "react";
import Button from "../components/Button";

interface Props {
  imgSrc: string;
  imgAlt: string;
  text: string;
  href: string;
}

const LinkCard: React.FC<Props> = ({ imgSrc, imgAlt, text, href }) => {
  return (
    <a className="link-card" href={href} target="_blank">
      <img src={imgSrc} alt={imgAlt} />
      <span>{text}</span>
    </a>
  );
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const disabledButton = useMemo(() => {
    return name.length < 4 || email.length === 0 || message.length === 0;
  }, [name, email, message]);

  console.log(disabledButton);
  return (
    <main className="contact">
      <h1>contact</h1>
      <p>
        It's super easy to reach me. Just contact me on one of these links below
        or fill out this form. I'll answer you in no time :)
      </p>

      <div className="link-container">
        <LinkCard
          imgSrc="/images/linkedin.svg"
          imgAlt="Linkedin icon"
          text="Mateus Nascimento"
          href="https://www.linkedin.com/in/mateus-nascimento-654589191/"
        />
        <LinkCard
          imgSrc="/images/email.svg"
          imgAlt="Email icon"
          text="mmrndev@gmail.com"
          href="mailto:mmrndev@gmail.com"
        />
      </div>

      {/*}
      <form className="contact-form">
        <div className="input-wrapper">
          <input
            value={name}
            placeholder="your name"
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </div>
        <div className="input-wrapper">
          <input
            value={email}
            placeholder="your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          value={message}
          placeholder="your message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <Button style={{ marginLeft: "auto" }} disabled={disabledButton}>
          Send
        </Button>
      </form>
  {*/}
    </main>
  );
}
