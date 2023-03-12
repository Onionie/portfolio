import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsFillSendFill } from 'react-icons/bs';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message Sent');
          e.target.reset();
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
          setShowModal(true);
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <form className={styles.form__container} ref={form} onSubmit={sendEmail}>
        <div className={styles.name__box}>
          <div>
            <label>First Name</label>
            <input type="text" name="user_fname" placeholder="John" required />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="user_lname" placeholder="Doe" required />
          </div>
        </div>
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="johndoe@email.com"
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Type your message in here"
          required
        />
        <div className={styles.btn__send}>
          <BsFillSendFill />
          <input className={styles.send} type="submit" value="Send" />
        </div>
      </form>
      {showModal ? <div className={styles.modal}>Message is sent!</div> : ''}
    </section>
  );
};

export default Contact;
