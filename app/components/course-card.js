import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { domine } from '../styles/fonts';

/**
 * CourseCard é um componente que exibe as informações de um curso específico.
 * @param {Object} props - As propriedades passadas para o componente.
 * @param {string} props.imageSrc - A URL da imagem do curso.
 * @param {string} props.title - O título do curso.
 * @param {string} props.date - A data de conclusão do curso.
 * @param {Array<string>} props.courses - A lista de cursos realizados.
 * @returns {React.ReactElement} Renderiza o card de um curso.
 */
export function CourseCard({ imageSrc, title, date, courses }) {
  <div className="flex items-center bg-transparent border-[1px]
   border-solid border-custom-white rounded-xl flex-col
   justify-evenly mb-2 w-11/12 ml-2 py-5 px-7" >

    <Image
      className="w-16 mb-2"
      src={imageSrc}
      alt={title}
      width={64}
      height={64} />

    <h1 className={`mb-2 text-xl sm:text-[18px] ${domine.className}`} >
      {title} </h1>

    <h2 className="mb-3">Concluído em {date}</h2>

    <div className="flex flex-col items-center mt-3">
      <h2 className={`mb-2 text-lg sm:text-[18px] ${domine.className}`} >
        Cursos realizados </h2>

      <ul className="h-auto flex flex-col justify-evenly">
        {courses.map((course, index) => (
          <li key={index} className={index % 2 === 0 ? '' : 'py-3'} >
            {course} </li>
        ))}
      </ul>
    </div>
  </div>
}

CourseCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
};