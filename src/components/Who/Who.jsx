import React from "react";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const ExploreData = [
  {
    id: 1,
    title: "Accidentes Laborales",
    place: "Reclamos ante la A.R.T.",
    url: "#",
    image: Img1,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Siniestros Vehiculares",
    place: "Coliciones simples o multiples",
    url: "#",
    image: Img2,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Accidentes de Transito",
    place: "Prioridades de circulacion",
    url: "#",
    image: Img3,
    delay: 0.6,
  },
];

const Who = () => {
  return (
    <>
      <section  className="container" id="nosotros">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-center md:max-w-[650px] mx-auto space-y-4"
        >
          <p className="text-3xl">QUIENES SOMOS</p>
          <p>
          Contamos con más de 10 años de experiencia dedicados a brindar soluciones legales rápidas y efectivas en casos de accidentes de tránsito, laborales y siniestros vehiculares. Nuestro compromiso es defender tus derechos y garantizar que obtengas la indemnización que mereces.
          Ubicados en Capital Federal, ofrecemos un enfoque personalizado y profesional, adaptándonos a las necesidades de cada cliente. Sabemos que enfrentarse a un accidente puede ser una experiencia estresante, por eso trabajamos con transparencia, eficacia y empatía.
          </p>
        </motion.div>
        <div id="casos" className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center bg">
  {ExploreData.map((data) => (
    <motion.div
      variants={SlideUp()}
      initial="hidden"
      animate="visible"
      key={data.id}
      className="relative"
    >
      <img
        src={data.image}
        alt={data.title}
        className="w-[350px] h-[550px] object-cover"
      />
      <div className="absolute w-full bottom-0 inset-0 bg-brandDark/15">
        <div className="h-full space-y-1 py-6 flex flex-col justify-end items-center">
          {/* Nuevo fondo detrás del título y descripción */}
          <div className="bg-gray-800 bg-opacity-75 px-4 py-2 rounded-md">
            <h3 className="text-2xl font-semibold text-white">{data.title}</h3>
            <h3 className="uppercase text-white">{data.place}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>
      </section>
    </>
  );
};

export default Who;
