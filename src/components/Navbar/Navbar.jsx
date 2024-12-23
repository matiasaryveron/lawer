import React from "react";
import Logo from "../../assets/logo.png";
import { SlideBottom } from "../../utility/animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="container flex flex-row justify-around items-center py-4 md:py-8 uppercase font-semibold relative z-20 text-xs md:text-lg">
        <motion.div variants={SlideBottom(0)} initial="hidden" animate="visible">
          <Link
            to="inicio"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Inicio
          </Link>
        </motion.div>
        <motion.div variants={SlideBottom(0.2)} initial="hidden" animate="visible">
          <Link
            to="nosotros"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Nosotros
          </Link>
        </motion.div>
        <motion.div variants={SlideBottom(0.4)} initial="hidden" animate="visible">
          <img src={Logo} alt="" className="w-14" />
        </motion.div>
        <motion.div variants={SlideBottom(0.6)} initial="hidden" animate="visible">
          <Link
            to="casos"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Casos
          </Link>
        </motion.div>
        <motion.div variants={SlideBottom(0.8)} initial="hidden" animate="visible">
          <Link
            to="contactos"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contactos
          </Link>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
