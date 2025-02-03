import React from "react";
import { skills, technologyLogos } from "../../constants/skills-data";
import Image from "next/image";
import PropTypes from 'prop-types';

/**
 * Componente que renderiza um item de habilidade.
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {string} props.skill - Texto da habilidade.
 * @returns {ReactElement} Elemento de lista renderizado.
 */
const SkillItem = ({ skill }) => (
  <li
    className="border-[1px] border-solid border-custom-white
  rounded-xl mt-3 md:mt-0 p-3 ml-2 text-center w-auto sm:text-lg"
  >
    {skill}
  </li>
);

SkillItem.propTypes = {
  skill: PropTypes.string.isRequired,
};

/**
 * Componente que renderiza um item de logo.
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {string} props.src - URL da imagem do logo.
 * @param {string} props.alt - Texto alternativo para a imagem.
 * @returns {ReactElement} Elemento de imagem renderizado.
 */
const LogoItem = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={60}
    height={50}    
    className="border-[1px] border-solid border-custom-white
     rounded-xl mt-2 p-3 text-center ml-2"
  />
);

LogoItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default function ListSkills() {

    return (
         <div className="flex items-center flex-col h-auto justify-evenly
            w-4/5 sm:w-[95%] sm:flex-col sm:justify-evenly sm:h-auto" >
              <ul
                className="flex items-center md:h-32 h-auto w-auto flex-wrap
               justify-evenly mt-3 xl:w-3/4 mb-4 px-4 xl:h-36">
                {skills.map((skill) => (
                  <SkillItem
                    key={skill}
                    skill={skill}
                  />
                ))}
              </ul>
              <div
                className="w-auto h-auto flex mt-6 items-center
               justify-evenly flex-wrap xl:w-3/4 xl:mb-1 xl:h-auto xl:mt-3" >
                {technologyLogos.map((logo) => (
                  <LogoItem
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </div>
            </div>
    )
}