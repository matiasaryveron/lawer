import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="min-h-[900px] flex justify-center items-center bg-gradient-to-t from-brandDark from-2% to-transparent to-15% h-full">
        <div
          className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 0, 0, 0.3) 50%, rgba(11, 11, 13, 0.5) 70%, rgba(11, 11, 13, 0.8) 90%)",
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="container  relative z-20 text-center space-y-8"
        >
          <h1 className="text-5xl md:text-8xl font-bold font-merriweather   p-4">
            Asesoria Legal
          </h1>
          <p className=" text-2xl md:text-4xl ">Nosotros hacemos justicia.</p>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
