import React from "react";
import { MdOutlineWhereToVote } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FeaturesData = [
  {
    name: "WhatsApp",
    icon: (
      <FaWhatsapp className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "https://wa.me/5491158932667?text=Hola%20%F0%9F%91%8B%2C%20te%20contacto%20desde%20la%20p%C3%A1gina%20web%2C%20quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n.", 
    description: "+54 9 11-5893-2667",
    additionalInfo: "¡Contáctanos al instante!",
  },
  {
    name: "Correo Electrónico",
    icon: (
      <MdEmail className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "mailto:legalasesoria706@gmail.com",
    description: "legalasesoria706@gmail.com",
    additionalInfo: "¡Envíanos un correo!",
  },
];

const Contact = () => {
  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <>
      <div id="contactos" className="container py-14 sm:min-h-[600px]">
        <div>
          <h1
            className="text-3xl font-semibold text-center sm:text-4xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-secundary to-primary"
          >
            CONTACTOS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-10">
            {FeaturesData.map((data, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(data.link)}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-slate-600 text-white rounded-lg cursor-pointer duration-300"
              >
                <div className="grid place-items-center">{data.icon}</div>
                <h1 className="text-2xl">{data.name}</h1>
                <p className="text-lg font-bold text-white">{data.description}</p>
                <p className="text-sm text-white">{data.additionalInfo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
