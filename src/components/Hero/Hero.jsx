import React from "react";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hola,
            <br />
            Soy Clara
          </motion.span>
          <motion.span
            // className={css.person}
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            <img
              src="./Tarjeta_sincolortrue.png"
              alt=""
              width="450"
              height="200"
            />
          </motion.span>
          {/* <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </motion.span> */}
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          {/* <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person1.png"
            alt=""
            width="380"
            height="500"
          /> */}
          {/* <motion.img
            variants={zoomIn(0, 0)}
            src="./person1.png"
            alt=""
            width="380"
            height="500"
          /> */}
          <img
            // variants={zoomIn(0, 0)}
            src="./person1.png"
            alt=""
            width="380"
            height="500"
          />
        </motion.div>

        {/* <a className={css.email} href="mailto:zainkeepscode@gmail.com">
          zainkeepscode@gmail.com
        </a> */}

        <div className={css.lowerElements}>
          {/* <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div> */}

          <motion.div
            variants={fadeIn("right", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>PROFESIONAL CERTIFICADA</span>
            <span>PSICÓLOGA</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
