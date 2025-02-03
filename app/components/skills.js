import React from 'react';
import { domine } from '../styles/fonts';
import ListSkills from './skills/list-skills';

/**
 * Componente que renderiza a seção de habilidades.
 * @returns {ReactElement} A seção de habilidades renderizada.
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
        aria-label="Skills" >
        Skills
      </h3>

      <ListSkills />
    </div>
  </section>
);

export default Skills;
