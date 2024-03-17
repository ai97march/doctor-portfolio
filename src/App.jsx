import React from "react";
// import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
import ContactForm from "./components/Contact/ContactForm";
// import Calendar from "./components/Calendar/calendar";
import Appointment from "./components/Appointment/Appointment";
// import NodeAnimation from "./components/Appointment/nodeAnimation";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import Process from "./components/Process/Process";
import DoctoraliaWidget from "./components/Calendar/DoctoraliaWidget";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      {/* <NodeAnimation /> */}
      <Appointment />
      {/* <Hero /> */}
      <AboutMe />
      <Services />
      <Process />
      {/* <Experties /> */}
      {/* <Work /> */}
      {/* <Portfolio /> */}
      <People />
      <ContactForm />
      {/* <Calendar /> */}
      <DoctoraliaWidget />
      <Footer />
    </div>
  );
};

export default App;
