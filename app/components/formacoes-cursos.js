import React from 'react';
import PropTypes from 'prop-types';
import { Domine } from 'next/font/google';
import Image from 'next/image';

 
const domine = Domine({
  subsets: ['latin'],
  weight: '500',
});

/**
 * CourseCard é um componente que exibe as informações de um curso específico.
 * @param {Object} props - As propriedades passadas para o componente.
 * @param {string} props.imageSrc - A URL da imagem do curso.
 * @param {string} props.title - O título do curso.
 * @param {string} props.date - A data de conclusão do curso.
 * @param {Array<string>} props.courses - A lista de cursos realizados.
 * @return {React.ReactElement} Renderiza o card de um curso.
 */
const CourseCard = ({ imageSrc, title, date, courses }) => (
  <div
    className="flex items-center bg-transparent border-[1px]
   border-solid border-custom-white rounded-xl flex-col
   justify-evenly mb-2 w-11/12 ml-2 py-5 px-7"
  >
    <Image
      className="w-16 mb-2"
      src={imageSrc}
      alt={title}
      width={64}
      height={64}    
      />
    <h1
      className={`mb-2 text-xl sm:text-[18px] 
    ${domine.className}`}
    >
      {title}
    </h1>

    <h2 className="mb-3">Concluído em {date}</h2>

    <div className="flex flex-col items-center mt-3">
      <h2
        className={`mb-2 text-lg sm:text-[18px] 
      ${domine.className}`}
      >
        Cursos realizados
      </h2>

      <ul className="h-auto flex flex-col justify-evenly">
        {courses.map((course, index) => (
          <li
            key={index}
            className={index % 2 === 0 ? '' : 'py-3'}
          >
            {course}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

CourseCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/**
 * FormacoesCursos é um componente que exibe
 * uma seção de formações e cursos realizados.
 * @return {React.ReactElement} Renderiza a seção de formações e cursos.
 */
const FormacoesCursos = () => (
  <section className="h-auto w-full py-7">
    <div>
      <h4
        className={`text-xl my-2 ml-4 md:text-[28px] md:ml-10 
          font-extralight
          text-custom-blue
          text-cente
          sm:text-[22px] ${domine.className}`}
      >
        Formações e Cursos
      </h4>
    </div>
    <div
      className="content-around items-start
    justify-evenly flex w-full h-auto py-5"
    >
      <div className="items-center justify-evenly flex flex-col h-auto">
        <CourseCard
          imageSrc="/img/front-end.png"
          title="Desenvolvimento Front End - ONE"
          date="30 de setembro de 2022"
          courses={[
            'JS na WEb: CRUD',
            'javaScript: Orientação a Objetos',
            'Git e Github',
            'Expressões regulares: capturando textos de forma mágica',
            'lógica de programação ll: pratique com desenhos, animação e um jogo',
            'HTML5 e CSS3 parte 3: trabalhado com formulários e tabelas',
            'Layouts Responsivos: trabalhando com layouts mobile',
            'Acessibilidade web',
          ]}
        />
        <CourseCard
          imageSrc="/img/banco-de-dados.png"
          title="SQL com MySQL Server da Oracle - ONE"
          date="11 de dezembro de 2022"
          courses={['Consultas SQL: Avançando No SQL Com MYSQL']}
        />
      </div>
      <div className="items-center justify-evenly flex flex-col h-auto">
        <CourseCard
          imageSrc="/img/inteligência-artificial.png"
          title="Career Essentials in Generative AI Microsoft and LinkedIn"
          date="27 de setembro de 2023"
          courses={[
            'Ethics in the Age of Generative AI',
            'What Is Generative AI?',
          ]}
        />
        <CourseCard
          imageSrc="/img/agile.png"
          title="Business Agility - ONE"
          date="20 de setembro de 2022"
          courses={[
            'Organização de Equipes Ágeis: os papéis existentes em uma equipe',
            'Agilidade : promovendo a transformação ágil',
          ]}
        />
        <CourseCard
          imageSrc="/img/soft-skills.png"
          title="Desenvolvimento Pessoal - ONE"
          date="27 de setembro de 2022"
          courses={[
            'Hábitos : da produtividade metas pessoais',
            'Foco: Trazendo mais resultados para o dia a dia',
            'LinkedIn: Como fazer o seu perfil trabalhar para você',
            'Pitch entrevistas: Faça apresentações de impacto',
            'Produtividade parte 2: organização e prioridade',
          ]}
        />
      </div>
    </div>
  </section>
);

export default FormacoesCursos;
