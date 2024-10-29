import { useState } from "react";
import swal from "sweetalert";

import styles from "./styles.module.css";
import linkedInLogo from "../../assets/linkedinLogo.svg";
import githubLogo from "../../assets/githubLogo.svg";
import mailLogo from "../../assets/mailLogo.svg";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!info.name || !info.email || !info.message) {
      swal({
        title: "Error!",
        text: "Please fill all the fields",
        icon: "error",
        button: "Ok",
      });
      return;
    }
    window.open(
      `mailto:chandrakantgupta6814@gmail.com?subject=${info.name}&body=${info.message}`
    );
    setInfo({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.contactsContainer} id="contact">
      <div className={styles.title}>Contact Us</div>
      <form className={styles.ContactFormContainer}>
        <div className={styles.FormItemContainer}>
          <label htmlFor="name" className={styles.formItem}>
            Name
          </label>
          <input
            type="text"
            className={styles.formItemInput}
            id="name"
            placeholder="Enter your name"
            aria-describedby="name"
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            value={info.name}
          />
        </div>
        <div className={styles.FormItemContainer}>
          <label htmlFor="email" className={styles.formItem}>
            Email Address
          </label>
          <input
            type="email"
            className={styles.formItemInput}
            id="email"
            placeholder="Enter your email id"
            aria-describedby="emailHelp"
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            value={info.email}
          />
        </div>
        <div className={styles.FormItemContainer}>
          <label className={styles.formItem} htmlFor="message">
            Message
          </label>
          <textarea
            type="textarea"
            id="message"
            className={styles.formItemInput}
            placeholder="Enter your Message"
            aria-describedby="message"
            onChange={(e) => setInfo({ ...info, message: e.target.value })}
            value={info.message}
          ></textarea>
        </div>
        <button
          className={styles.submitBtn}
          onClick={(e) => handleFormSubmit(e)}
        >
          Submit
        </button>
      </form>
      <div className={styles.contactsList}>
        <a
          href="https://www.linkedin.com/in/chandrakant-gupta-598968289"
          target="_blank"
          rel="noreferrer"
          className={styles.contactsListItem}
        >
          <img src={linkedInLogo} alt="Linkedin" width="20px" />
        </a>
        <a
          href="https://github.com/Chandrakant-iitbbs"
          target="_blank"
          rel="noreferrer"
          className={styles.contactsListItem}
        >
          <img src={githubLogo} alt="GitHub" width="20px" />
        </a>
        <a
          href="mailto:chandrakantgupta6814@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.contactsListItem}
        >
          <img src={mailLogo} alt="Email me" width="20px" />
        </a>
      </div>

      <div className={styles.copyright}>Handcrafted by me ©️ 2024</div>
      <div className={styles.madeWith}>
        <span>Made with </span>
        <i className="fa-solid fa-heart" style={{ color: "#f65c52" }}></i>
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
          color="var(--tc4) !important"
        >
          React
        </a>
      </div>
    </div>
  );
};
export default Contact;
