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
      {/* Create state modal: disabled={state? true : false */}
      <fieldset disabled={false}>
        <form
          className={styles.form__container}
          ref={form}
          onSubmit={sendEmail}
        >
          <h1>Send me a message</h1>
          <div className={styles.name__box}>
            <input
              type="text"
              name="user_fname"
              placeholder="First Name"
              required
            />

            <input
              type="text"
              name="user_lname"
              placeholder="Last Name"
              required
            />
          </div>
          <input type="email" name="user_email" placeholder="Email" required />
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
      </fieldset>

      {showModal ? <div className={styles.modal}>Message is sent!</div> : ''}
    </section>
  );
};

export default Contact;
