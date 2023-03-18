import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsFillSendFill } from 'react-icons/bs';
import { SlClose } from 'react-icons/sl';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

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
          e.target.reset();
          console.log(result.text);
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
          setShowModal(true);
        }
      );
  };

  const removeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="contact" className={styles.contact}>
      <fieldset disabled={showModal ? true : false}>
        <form
          className={styles.form__container}
          ref={form}
          onSubmit={sendEmail}
          onClick={removeModal}
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
          <div
            className={
              showModal
                ? `${styles.btn__disable} ${styles.btn__send}`
                : `${styles.btn__send}`
            }
          >
            <BsFillSendFill />
            <input className={styles.send} type="submit" value="Send" />
          </div>
        </form>

        {showModal ? (
          <div className={styles.modal}>
            <div className={styles.close_btn} onClick={removeModal}>
              <SlClose />
            </div>
            <h2>Message sent!</h2>
            <h6>Please close this message to send a new email</h6>
          </div>
        ) : (
          ''
        )}
      </fieldset>
    </section>
  );
};

export default Contact;
