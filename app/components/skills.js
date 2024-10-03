import React from 'react';
import PropTypes from 'prop-types';
import { Domine } from 'next/font/google';
import Image from 'next/image';

// eslint-disable-next-line new-cap
const domine = Domine({
  subsets: ['latin'],
  weight: '500',
});

const skillsList = [
  'Aprendizado contínuo',
  'Autoconfiança',
  'Comprometimento',
  'Foco',
  'Paciência',
  'Persistência',
  'Receptividade a feedback',
];

const logos = [
  { src: '/img/git.png', alt: 'Logo do sistema de controle de versão Git' },
  { src: '/img/html.png', alt: 'Logo da linguagem de marcação HTML' },
  { src: '/img/css.png', alt: 'Logo da linguagem de estilos CSS' },
  { src: '/img/sass.png', alt: 'Logo do pré-processador Sass' },
  {
    src: '/img/javascript.png',
    alt: 'Logo da linguagem de programação JavaScript',
  },
  { src: '/img/react.png', alt: 'Logo da biblioteca React' },
  { src: '/img/sql.png', alt: 'Logo da linguagem de programação SQL' },
  { src: '/img/mysql.png', alt: 'Logo do banco de dados MySQL' },
];

/**
 * Componente que renderiza um item de habilidade.
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {string} props.skill - Texto da habilidade.
 * @return {ReactElement} Elemento de lista renderizado.
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
 * @return {ReactElement} Elemento de imagem renderizado.
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

/**
 * Componente que renderiza a seção de habilidades.
 * @return {ReactElement} A seção de habilidades renderizada.
 */
const Skills = () => (
  <section
    className="flex flex-col justify-evenly w-full items-center
  h-auto md:h-[500px] lg:h-[550px] py-12"
  >
    <div className="flex items-start w-full">
      <h3
        className={`text-xl my-2 ml-4 md:text-[28px] md:ml-10 
        font-extralight mb-2 text-custom-blue text-center 
        sm:text-[22px] ${domine.className}`}
        aria-label="Skills"
      >
        Skills
      </h3>
    </div>
    <div
      className="flex items-center flex-col h-auto justify-evenly
    w-4/5 sm:w-[95%] sm:flex-col sm:justify-evenly sm:h-auto"
    >
      <ul
        className="flex items-center md:h-32 h-auto w-auto flex-wrap
       justify-evenly mt-3 xl:w-3/4 mb-4 px-4 xl:h-36"
      >
        {skillsList.map((skill, index) => (
          <SkillItem
            key={index}
            skill={skill}
          />
        ))}
      </ul>
      <div
        className="w-auto h-auto flex mt-6 items-center
       justify-evenly flex-wrap xl:w-3/4 xl:mb-1 xl:h-auto xl:mt-3"
      >
        {logos.map((logo, index) => (
          <LogoItem
            key={index}
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
