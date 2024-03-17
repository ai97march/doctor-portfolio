import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Appointment.module.scss";
import { motion } from "framer-motion";
// import background from "../../../public/Foto sofá consulta.jpg";

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};

const Appointment = () => {
  return (
    <>
      <section
        className={`paddings ${css.wrapper}`}
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("../../../Foto sofá consulta.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // position: "relative",
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          // className={`innerWidth ${css.container}`}
        >
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
                paddingRight: "2rem",
              }}
            >
              <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
                <img
                  src="./Tarjeta_sincolortrue.png"
                  alt=""
                  width="450"
                  height="200"
                />
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("right", "tween", 0.5, 0.5)}
              style={{
                borderRadius: "10px",
                display: "flex",
                height: "200px",
                width: "900px",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "rgba(0,0,0,0.7)",
              }}
            >
              <div
                style={{
                  color: "black",
                  fontFamily: "Source Sans Pro !important",
                }}
              >
                <h1>
                  “Puede que la acción no traiga la felicidad pero no hay
                  felicidad sin acción ”
                </h1>
                <br />
                <span
                  style={{
                    // fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: "20px",
                  }}
                >
                  - William James
                </span>
              </div>
            </motion.div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: "3rem",
                paddingRight: "4rem",
              }}
            >
              <motion.div
                variants={fadeIn("right", "tween", 0.5, 1)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "2rem",
                }}
              >
                <img
                  style={{
                    marginBottom: "1rem",
                    width: "3.5rem",
                  }}
                  src="./certificate.png"
                  alt=""
                />
                <span>PROFESIONAL CERTIFICADA</span>
                <span>PSICÓLOGA</span>
              </motion.div>
              <motion.div
                variants={fadeIn("left", "tween", 0.5, 1)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "2rem",
                }}
              >
                <a href="#contact">
                  <motion.button
                    variants={button}
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
                      // fontSize: "18px",
                      width: "250px",
                      height: "50px", // Font size
                    }}
                  >
                    {/* <h2>
                    <a href="#calendar">Pide una cita</a>
                  </h2> */}
                    <h2>Pide tu cita</h2>
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Appointment;
