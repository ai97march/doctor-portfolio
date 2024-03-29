import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import css from "./Services.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const therapyCards = [
  {
    title: "PSICOLOGÍA INFANTIL Y ADOLESCENTE",
    direction: "right",
    bullets: [
      "Crisis de identidad",
      "Conflicto familiar",
      "Dificultades escolares",
      "Baja autoestima",
      "Dificultades relacionales",
      "Aislamiento",
      "Depresión",
      //   "Ansiedad",
      //   "Miedo",
      //   "Inestabilidad emocional/agresividad",
      // "Falta de motivación
      // "Bajo autocontrol e inestabilidad emocional
      // "Acoso escolar/Bullying
      // "Celos
      // "Duelo
      // "Nerviosismo
      // "Conducta disruptiva
      // "Eneuresis
      // "Trastorno del sueño y de la alimentación
      // "Dificultad para concentrarse",
      //
    ],
  },
  {
    title: "ASESORAMIENTO CRIANZA",
    direction: "up",
    bullets: [
      "Dificultad para establecer límites",
      "Dificultad en la comunicación",
      "Diferentes estilos educativos entre progenitores",
      "Conflictos familiares",
      "Conflicto en la pareja por discrepancias en la educación",
    ],
  },
  {
    title: "TERAPIA INDIVIDUAL",
    direction: "left",
    bullets: [
      "Depresión",
      "Ansiedad",
      "Miedos",
      "Baja autoestima",
      "Dificultades de socialización",
      "Duelo, rupturas, separaciones",
      "Falta de asertividad y confianza",
      "Conflictos pasados no resueltos",
    ],
  },
];

const Services = () => {
  return (
    <section
      className={`paddings ${css.wrapper}`}
      style={{ background: "#fffcf6" }}
    >
      <a className="anchor" id="services"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={`flexCenter ${css.heading} bottomPaddings topPaddings`}
        >
          <span className="primaryText">SERVICIOS</span>
        </motion.div>

        {/* <div
          // className="col-xl-11 col-sm-10"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        > */}
        <Grid container spacing={2}>
          {therapyCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={fadeIn(card.direction, "tween", 0.5, 1)}>
                <Card
                  style={{ marginBottom: "1rem" }}
                  key={index}
                  sx={{
                    maxWidth: 345,
                  }}
                >
                  <CardActionArea href="#widget">
                    <CardHeader
                      title={
                        <Typography
                          variant="h5"
                          align="center"
                          sx={{
                            // fontFamily: "sans-serif",
                            fontWeight: 700,
                            color: "#3f51b5",
                            fontSize: "1.25rem",
                          }}
                        >
                          {card.title}
                        </Typography>
                      }
                      sx={{
                        backdropFilter: "blur(10px) saturate(0%)",
                        WebkitBackdropFilter: "blur(10px) saturate(0%)",
                        backgroundColor: "rgba(0, 255, 185, 0.25)",
                        borderBottomLeftRadius: "20px",
                        border: "1px solid rgba(209, 213, 219, 0.3)",
                      }}
                    />
                    {/* <Divider /> */}
                    <CardContent>
                      <ul style={{ paddingLeft: "16px" }}>
                        {card.bullets.map((bullet, index) => (
                          <li key={index} style={{ padding: "0 16px" }}>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: 400, lineHeight: "1.4" }}
                            >
                              {bullet}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <motion.div
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.1 },
                        pressed: { scale: 0.95 },
                      }}
                      initial="rest"
                      whileHover="hover"
                      whileTap="pressed"
                      style={{ display: "flex", marginBottom: "15px" }}
                    >
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ mt: 2, mx: "auto" }}
                        com
                        href="#widget"
                      >
                        <Typography
                          variant="button"
                          sx={{ fontFamily: "sans-serif", fontWeight: 500 }}
                        >
                          Pide tu cita
                        </Typography>
                      </Button>
                    </motion.div>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        {/* </div> */}
      </motion.div>
    </section>
  );
};

export default Services;
