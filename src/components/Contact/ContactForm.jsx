import React, { useState } from "react";
import css from "./ContactForm.module.scss";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="contact"></a>

      {/* <div className={`innerWidth flexCenter ${css.container}`}> */}
      <div className={`innerWidth flexCenter`}>
        <span className="primaryText yPaddings">Contacto</span>
      </div>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container} col-xl-6 col-sm-6`}
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div style={{ padding: "1rem" }}>
          <form onSubmit={handleSubmit} className={css.contact}>
            <label htmlFor="name">Nombre:</label>
            <input
              id="name"
              type="text"
              name="name"
              required="required"
              placeholder="Tu Nombre..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Correo electrónico:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Tu Email..."
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Tu Teléfono..."
              required="required"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              rows="2"
              required="required"
              placeholder="Tu Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <motion.button
              variants={button}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
              type="submit"
            >
              Enviar
            </motion.button>
          </form>
        </div>
        <div style={{ padding: "1rem" }}>
          <iframe
            className="aboutSectionImage"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.7967578852627!2d-6.002117019194299!3d37.39463848352325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c0cf368136f%3A0xd5550df64124d74c!2sC.%20Bajeles%2C%2013%2C%201%20floor-M2%2C%20Casco%20Antiguo%2C%2041002%20Sevilla%2C%20Spain!5e0!3m2!1sen!2sin!4v1708886272348!5m2!1sen!2sin"
            width="500"
            height="380"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
      {/* </div> */}
    </motion.section>
  );
};

export default ContactForm;
