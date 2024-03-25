import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primaryNew paddings  ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow, background: "#F8F7F1" }}
    >
      <div className={`innerWidth ${css.container} flexCenter `}>
        <div className="flexCenter">
          <img
            src="./Tarjeta_sincolortrue_simple.png"
            alt="Clara López Psicóloga"
            width="60"
            height="50"
          />
          <div>
            <div className={css.name}>Clara López</div>
            <div className={css.subname}>PSICOLOGÍA</div>
          </div>
        </div>

        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#aboutme">SOBRE MÍ</a>
          </li>
          <li>
            <a href="#services">SERVICIOS</a>
          </li>
          <li>
            <a href="#people">TESTIMONIOS</a>
          </li>
          <li>
            <a href="#contact">CONTACTO</a>
          </li>
          {/* <li className={`flexCenter ${css.phone}`}>
            <p>+001 (313) 345 678</p>
            <BiPhoneCall size={"40px"} />
          </li> */}
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
