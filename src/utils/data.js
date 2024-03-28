import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Self-Employed, Brisbane",
    tenure: "Aug 2014 - Sep 2016",
    role: "Visual Designer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "New Man Services",
    tenure: "Aug 2014 - Sep 2016",
    role: "UI/UX Designer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "Global Solution",
    tenure: "Aug 2014 - Sep 2016",
    role: "Sr. Product Designer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
];

export const comments = [
  {
    name: "Laura Álvarez",
    post: "Visitante",
    comment:
      "Clara es una grandísima profesional además de ser un amor de persona. He experimentado sesiones físicas así como online y la recomiendo sin ningún tipo de duda. Le tengo mucho que agradecer porque ha sabido escucharme, explicarme con detenimiento los procesos por los que pasaba, así como que me sentía en un lugar seguro cuando tenía sesión con ella. Clara hace que abrazar esos procesos no sea tan difícil y ese aprendizaje lo recordaré toda la vida, estoy segura.",
    img: "./people2.png",
  },
  {
    name: "Aroa",
    post: "Visitante",
    comment:
      "Clara me ayudo muchísimo a llevar un proceso muy duro . Sabe escuchar y comunicarse . A mi personalmente me llevo a mi perdón y a ver las cosas desde otro punto de vista . Gracias Clara .",
    img: "./people1.png",
  },
  {
    name: "Patricia C",
    post: "Visitante",
    comment:
      "Muy muy contenta . Es la primera psicóloga a la que he acudido , por lo que al principio estaba muy nerviosa . Clara es una persona espectacular , siempre me ha hecho sentir cómoda y tranquila en las sesiones . En un principio tuve sesiones en persona y ahora que no estoy en Sevilla online . La recomendaría 100 % a cualquier persona :) .",
    img: "./people2.png",
  },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people1.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people2.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people1.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people2.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people1.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people2.png",
  // },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
