import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import css from "./Process.module.scss";
import { fadeIn, staggerContainer } from "../../utils/motion";

const ProcessCard = ({ process }) => {
  const { image, name, info } = process;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          style={{
            lineHeight: 1.4,
          }}
        >
          {info}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Process = () => {
  const processes = [
    {
      direction: "right",
      image: "./evaluation_11501870.png",
      name: "Evaluación y establecimiento de objetivos terapéuticos",
      info: "Esta primera sesión es la de recogida de información, donde me cuentas que te ha traído a la consulta, cómo te sientes, y marcamos unos objetivos a trabajar.",
    },
    {
      direction: "up",
      image: "./conversation_3762661.png",
      name: "Intervención psicoterapéutica",
      info: "En esta fase empieza la terapia como tal, donde comenzamos a trabajar en los objetivos marcados.  ",
    },
    {
      direction: "left",
      image: "./award_2471714.png",
      name: "Obtención de resultados y evaluación final",
      info: "La terapia tiene que tener un fin, y cuando llega es buena señal, significará que has logrado lo que habíamos marcado, o que has adquirido las herramientas que necesitas para hacer frente a aquello que te trajo a la consulta.",
    },
  ];

  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={`flexCenter ${css.heading}`}
        >
          <span
            style={{
              textAlign: "center",
            }}
            className="primaryText"
          >
            PROCESO DE LA TERAPIA:
          </span>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={`flexCenter ${css.subheading} bottomPaddings`}
        >
          <span
            style={{
              textAlign: "center",
            }}
            className="primaryText"
          >
            Cómo vamos a trabajar?
          </span>
        </motion.div>
        <Grid container spacing={2}>
          {processes.map((process, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={fadeIn(process.direction, "tween", 0.5, 1)}>
                <ProcessCard process={process} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </section>
  );
};

export default Process;
