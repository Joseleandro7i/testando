import React from 'react';
import { domine } from '../styles/fonts';
import { CourseCard } from './course-card';
import { dataCourses } from '../constants/data-courses';


/**
 * FormacoesCursos é um componente que exibe
 * uma seção de formações e cursos realizados.
 * @returns {React.ReactElement} Renderiza a seção de formações e cursos.
 */
const Courses = () => (
  <section className="h-auto w-full py-7">
    <div>
      <h4
        className={`text-xl my-2 ml-4 md:text-[28px] md:ml-10 
          font-extralight
          text-custom-blue
          text-center
          sm:text-[22px] ${domine.className}`}
      >
        Formações e Cursos
      </h4>
    </div>
    <div className="flex flex-wrap justify-evenly py-5">
      {dataCourses.map((course, index) => (
        <CourseCard
          key={index}
          imageSrc={course.imageSrc}
          title={course.title}
          date={course.date}
          courses={course.courses}
        />
      ))}
    </div>
  </section >
);

export default Courses;
