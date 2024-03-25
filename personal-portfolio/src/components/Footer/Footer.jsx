// import React from "react";
// import { footerVariants, staggerChildren } from "../../utils/motion";
// import css from "./Footer.module.scss";
// import { motion } from "framer-motion";
// const Footer = () => {
//   return (
//     <motion.section
//       variants={staggerChildren}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//       className={`paddings ${css.wrapper}`}
//     >
//       <motion.div
//         variants={footerVariants}
//         className={`innerWidth yPaddings flexCenter ${css.container}`}
//       >
//         <div className={css.left}>
//           <span className="primaryText">
//             Let's make something <br />
//             amazing together.
//           </span>
//           <span className="primaryText">
//             Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
//           </span>
//         </div>

//         <div className={css.right}>
//           <div className={css.info}>
//             <span className="secondaryText">Information</span>
//             <p>145 New York, FL 5467, USA</p>
//           </div>
//           <ul className={css.menu}>
//             <li>Services</li>
//             <li>Works</li>
//             <li>Notes</li>
//             <li>Experience</li>
//           </ul>
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default Footer;

import React from "react";
import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.footerContent}>
        <p>
          6 Calle Mayor, <br />
          Madrid, Comunidad de Madrid, 28013, <br />
          España Nuestra ficha en Google My Business.
        </p>
        <p>
          Esta web utiliza enlaces de afiliación de Amazon.
          <br />
          Todos los derechos reservados ©2018. Aviso legal
          <br />
          <a href="/privacy-policy">Política de privacidad</a> -{" "}
          <a href="/cookie-policy">Política de cookies</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
