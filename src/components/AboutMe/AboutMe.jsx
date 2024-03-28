import React from "react";
import { motion } from "framer-motion";
import css from "./AboutMe.module.scss";
import { fadeIn, staggerContainer } from "../../utils/motion";

const AboutMe = () => {
  return (
    <section className={`paddings ${css.wrapper} col-12`}>
      <a className="anchor" id="aboutme"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={`flexCenter ${css.heading} bottomPaddings`}
        >
          <span
            style={{
              textAlign: "center",
            }}
            className="primaryText"
          >
            Un trocito de mi historia
          </span>
        </motion.div>
        <div class="row" style={{ justifyContent: "center" }}>
          <div
            className="col-xl-11 col-sm-10"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div className="col-sm-10 col-md-5 col-xl-6">
              <motion.div
                variants={fadeIn("right", "tween", 0.3, 1)}
                style={{
                  paddingRight: "0rem",
                  display: "grid",
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  className="aboutSectionImage"
                  // variants={zoomIn(0, 0)}
                  src="./photo.jpg"
                  alt=""
                  height="500"
                  width="500"
                  style={{
                    // border: "3px solid none", // Border color and thickness
                    borderRadius: "20px", // Border radius
                  }}
                />
                <br />

                <div className="flexCenter">
                  <a href="#contact">
                    <motion.button
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.1 },
                        pressed: { scale: 0.95 },
                      }}
                      initial="rest"
                      whileHover="hover"
                      whileTap="pressed"
                      style={{
                        backgroundColor: "#0096FF", // Green background color
                        color: "white", // White text color
                        padding: "10px 20px", // Padding for the button
                        borderRadius: "5px", // Rounded corners
                        cursor: "pointer", // Cursor style on hover
                        border: "none", // No border
                        fontSize: "16px", // Font size
                      }}
                    >
                      Pide tu cita
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="col-sm-10  col-m-5 col-xl-6 h-200">
              <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    lineHeight: "1.4",
                    // fontFamily: "Source Sans Pro, sans-serif",
                  }}
                >
                  Alguna vez me he preguntado qué hizo que decidiera estudiar y
                  ejercer la psicología. No tengo la respuesta exacta, pero sí
                  creo que ciertas circunstancias de mi vida me llevaron a
                  interesarme por los demás y desde mis posibilidades, a
                  ofrecerles sostén a los que lo necesitaban.
                </p>
                <br />
                <p style={{ textAlign: "center", lineHeight: "1.4" }}>
                  Es lo que he seguido haciendo como psicóloga y ahora desde mi
                  consulta. Mi propósito es que en ella, encuentres un lugar
                  seguro, porque considero que solo desde un lugar que sentimos
                  como seguro, podemos explorar aquello que nos preocupa,
                  inquieta o duele. Mi labor es acompañarte, impulsarte y
                  sostenerte cuando sea necesario, también aportarte
                  herramientas, sin olvidar que tú tienes una papel fundamental
                  en la terapia, y ese es el de integrar en tu vida lo aprendido
                  juntos y ponerlo en práctica, y eso es precisamente lo que
                  hace que la psicología tenga tanto poder sanador.
                </p>
                <br />
                <p style={{ textAlign: "center", lineHeight: "1.4" }}>
                  Estudié el Grado de Psicología (2014) en la Universidad de
                  Sevilla.. También viví 5 años en Londres donde realicé un
                  Máster en Psicología Infantil y Adolescente (2018) en la
                  Universidad de Greenwich y aunque a mitad de curso creía que
                  no sería capaz, ¡lo conseguí!.
                </p>
                <br />
                <p style={{ textAlign: "center", lineHeight: "1.4" }}>
                  Ya de vuelta, empecé a trabajar como psicóloga infantil y
                  adolescente en un Centro de Orientación Familiar muy
                  reconocido en Sevilla, donde gané experiencia y mucho
                  aprendizaje. Después vino la formación en Psicología Sistémica
                  (2019), el máster en Psicología General Sanitaria (2020), otro
                  curso, y otro más. Pero no te voy a aburrir con esta parte.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
