import React from 'react';
import PropTypes from 'prop-types';
import { Domine } from 'next/font/google';

 
const domine = Domine({
  subsets: ['latin'],
  weight: '500',
});

/**
 * Formacoa é um componente React que configura o layout da página.
 * @return {ReactElement} O elemento de layout renderizado.
 */
export default function Formacoa() {
  return (
    <section className="bg-dark py-10 w-full">
      <div>
        <h4
          className={`
          text-xl my-2 ml-4 md:text-[28px] md:ml-10 
           font-extralight
           text-custom-blue
           text-cente
           sm:text-[22px] ${domine.className}`}
        >
          Formações
        </h4>
      </div>

      <div
        className="flex justify-evenly flex-wrap flex-col
        items-center lg:flex-row lg:items-start lg:justify-start"
      >
        <Card
          title="Alura"
          content={`O ONE é um programa de educação e empregabilidade
                    com um propósito social de capacitar indivíduos no
                    campo da tecnologia e conectá-los com oportunidades de
                    emprego em parceria com diversas empresas.

                    Uma dessas valiosas parcerias é com a Alura,
                    a plataforma que me proporcionou a oportunidade de
                    realizar cursos online e adquirir conhecimentos
                    essenciais para o meu desenvolvimento.

                    Este programa é totalmente online e gratuito, 
                    ele é projetado para aqueles que não tiveram acesso
                    a uma educação de alta qualidade
                    e buscam transformar suas perspectivas sociais.

                    O programa tem uma duração de seis meses e é dividido em quatro
                    trilhas de aprendizado disponíveis na plataforma, totalizando
                    mais de 560 horas de conteúdo enriquecedor.`}
        />

        <Card
          title="Rocketseat"
          content={`Rocketseat, uma escola de programação onde mais de
                    50 mil pessoas, já passaram pelo seu programa de aprendizagem.
                    
                    A Rocketseat é uma referência em educação online na área
                    da tecnologia, oferecendo cursos em linguagens de programação
                    como JavaScript, React, Node.js e muito mais.

                    Além disso, a Rocketseat é a maior comunidade de desenvolvedores
                    da América Latina, promovendo eventos incríveis para conectar
                    inspirar e capacitar os profissionais da área.

                    Eu tive a oportunidade de participar de dois desses eventos:
                    o Next Level Week e o AI para Dev, que foram experiências
                    incríveis para ampliar meus conhecimentos, buscar crescimento
                    na minha carreira e me aproximar das oportunidades que desejo.`}
        />

        <Card
          title="Microsoft Learn"
          content={`Microsoft Learn é mais do que uma plataforma de
                    aprendizado on-line. É uma oportunidade de adquirir
                    conhecimentos práticos e atualizados sobre as tecnologias
                    presente no mercado.

                    Como desenvolvedor front-end,
                    eu pude aprender sobre React.js, uma das bibliotecas mais
                    populares e poderosas para criar interfaces de usuário
                    dinâmicas e responsivas.

                    Microsoft Learn
                    oferece cursos gratuitos, mais de 80 horas de conteúdo
                    gratuito, localizado em 23 idiomas, bem como treinamento
                    em uma ampla variedade de tópicos relacionados à tecnologia,
                    desde o desenvolvimento web, inteligência artificial,
                    plataformas como Azure, Dynamics,
                    Power Apps, Flow e muito mais.`}
        />
      </div>
    </section>
  );
}

/**
 * Card é um componente React que exibe um cartão com título e conteúdo.
 * @param {Object} props – As propriedades passadas para o componente.
 * @param {string} props.title – O título do cartão.
 * @param {string} props.content – o conteúdo do cartão.
 * com linhas separadas por caracteres de nova linha.
 * @return {ReactElement} O elemento do cartão renderizado.
 */
function Card({ title, content }) {
  return (
    <div className="w-10/12 lg:w-2/5 lg:mx-11 mx-1 mb-3 py-3">
      <h5
        className={`text-[28px] my-2 w-11/12 font-extralight
         text-center ${domine.className}`}
      >
        {title}
      </h5>
      <p
        className="flex items-center bg-transparent border-[1px]
       border-solid w-11/12 border-custom-white rounded-xl
       flex-col justify-evenly mb-2 h-auto sm:ml-2 py-5 px-7"
      >
        {content.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
