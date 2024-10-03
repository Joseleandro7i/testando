import React, { useEffect, useRef, useState } from 'react';
import { Domine } from 'next/font/google';
import PropTypes from 'prop-types';
import useAutoRespon from '../../../lib/useAutoRespon';
import Image from 'next/image';

// eslint-disable-next-line new-cap
const domine = Domine({
  subsets: ['latin'],
  weight: '500',
});

/**
 * Projeto @typedef {Object}
 * @property {string} urlDeploy - A URL para implantar o projeto.
 * @property {string} refElemSuporte - O ID do elemento support.
 * @property {string} refElemPosicionar - O ID do elemento de posicionamento.
 * @property {string} imgProjeto - A URL da imagem do projeto.
 * @property {string} nomeProjeto - O nome do projeto.
 * @property {string} urlRepositorio - A URL do repositório do projeto.
 * @property {Object.<string, { caminho: string, alt: string }>}
 * numerosImagens - As tecnologias utilizadas no projeto
 * com caminhos de imagem e textos alternativos.
 */

CriarProjetos.propTypes = {
  dateCreateProject: PropTypes.shape({
    urlDeploy: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    refElemSuporte: PropTypes.string.isRequired,
    refElemPosicionar: PropTypes.string.isRequired,
    imgProjeto: PropTypes.string.isRequired,
    nomeProjeto: PropTypes.string.isRequired,
    urlRepositorio: PropTypes.string.isRequired,
    textoDescricao: PropTypes.string.isRequired,
    numerosImagens: PropTypes.objectOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  state: PropTypes.bool.isRequired,
  handleClickProjeto: PropTypes.func.isRequired,
  updateStateClicadoX: PropTypes.func.isRequired,
};

/**
 * CriarProjetos is a React component that renders
 * project information and interactions.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Project} props.dateCreateProject - The project details.
 * @param {boolean} props.state - The state to determine visibility.
 * @param {Function} props.handleClickProjeto - The function to
 * handle project clicks.
 * @return {React.ReactElement} The rendered project component.
 */
export default function CriarProjetos({
  dateCreateProject,
  state,
  handleClickProjeto,
  updateStateClicadoX,
}) {
  const refs = useRef({
    refElemSuporte: null,
    refElemPosicionar: null,
  });

  const [supportElem, setSupportElem] = useState(null);
  const [positionElem, setPositionElem] = useState(null);

  // Use useEffect to dynamically update refs after the component has mounted
  useEffect(() => {
    // Set refs after the component mounts
    setSupportElem(refs.current.refElemSuporte);
    setPositionElem(refs.current.refElemPosicionar);

  }, [supportElem, positionElem, dateCreateProject]);
  
  useAutoRespon(supportElem, positionElem);


  const [estaVisivelProjeto, setEstaVisivelProjeto] = useState(false);
  // console.log(dateCreateProject)
  /**
   * Toggles the visibility of the project description.
   */
  const visivelDescricao = () => {
    setEstaVisivelProjeto((prevState) => !prevState);
    handleClickProjeto();
  };

  return (
    <div
      className={`h-auto w-auto flex-wrap 
    ${state ? 'flex flex-col items-center' : 'hidden'} mt-auto xl:mx-4 2xl:mx-0
     justify-evenly items-start`}
    >
      <div
        className="flex flex-col justify-around w-auto h-auto my-6 items-start"
        id={dateCreateProject.id}
      >
        <div className="flex flex-col justify-evenly items-center h-auto">
          <div className="flex justify-center items-center h-auto w-full">
            <Image
              className="w-[80vh] h-[50vh] sm:w-[450px] sm:h-60 rounded-2xl border-[1.9px] border-solid
              border-custom-white md:w-[350px]
               md:h-52 xl:h-64 xl:w-[410px]"
              src={dateCreateProject.imgProjeto}
              width={250}
              height={176}
              ref={(el) => (refs.current.refElemSuporte = el)} 
          
              alt={'Img'}
            />
            <div
              className="items-center rounded-2xl flex flex-col h-44 w-[90%]
               md:w-[95%] xl:h-[256px] justify-evenly absolute text-center
               top-auto xl:w-[410px] bg-dark-clear opacity-0 hover:opacity-100"
               id={dateCreateProject.refElemPosicionar}
               ref={(el) => (refs.current.refElemPosicionar = el)}  
            >
              <h2
                className={`py-2 px-3 sm:my-2 xl:ml-10 font-extralight 
                sm:px-6 bg-ligth-dark rounded-lg text-center sm:py-3 
                shadow-customShadow ${domine.className}`}
              >
                {dateCreateProject.nomeProjeto}
              </h2>
              <div className="flex justify-evenly w-full">
                <button
                  className="cursor-pointer border-[1.9px] border-solid
                  border-custom-white rounded-xl py-2 px-4 text-center
                  mx-2 text-white h-auto bg-ligth-dark hover:rounded-lg
                  active:rounded-md font-serif"
                  onClick={visivelDescricao}
                >
                  Descrição
                </button>
                <button
                  className="cursor-pointer border-[1.9px] border-solid
                  border-custom-white rounded-xl py-2 px-4 text-center
                  mx-2 text-white h-auto bg-ligth-dark hover:rounded-lg
                  active:rounded-md font-serif"
                  onClick={() =>
                    window.open(dateCreateProject.urlDeploy, '_blank')
                  }
                >
                  Visualizar
                </button>
                <button
                  className="cursor-pointer border-[1.9px] border-solid
                   border-custom-white rounded-xl py-2 px-4 text-center
                   mx-2 text-white h-auto bg-ligth-dark hover:rounded-lg
                   active:rounded-md font-serif"
                  onClick={() =>
                    window.open(dateCreateProject.urlRepositorio, '_blank')
                  }
                >
                  Repositório
                </button>
              </div>
            </div>
          </div>

          <div
            className={`bg-transparent border-[1.9px] border-solid 
            border-custom-white rounded-xl p-6 text-center h-auto w-2/4 mt-16
             ${estaVisivelProjeto ? 'visible' : 'hidden'}`}
          >
            <div className="flex flex-col w-auto h-auto items-end mb-2">
              <button
                className="py-1 px-2 bg-transparent border-[1.9px]
                border-solid border-custom-white rounded"
                onClick={() => {
                  updateStateClicadoX(true);
                  handleClickProjeto();
                  setEstaVisivelProjeto(false);
                }}
              >
                X
              </button>
            </div>
            <p className="flex items-center leading-6 mb-4 text-left">
              {dateCreateProject.textoDescricao}
            </p>
            <div className="h-32 flex flex-col justify-evenly">
              <div className="flex justify-evenly flex-col">
                <h2
                  className={`my-2 ml-1 px-3 py-3 font-extralight w-2/4
                   bg-ligth-dark rounded-xl text-center ${domine.className}`}
                >
                  Tecnologias utilizadas
                </h2>
              </div>
              <div className="flex justify-center px-2">
                {dateCreateProject.numerosImagens &&
                  Object.values(dateCreateProject.numerosImagens).map(
                    (element, index) => (
                      <Image
                        key={index}
                        layout='fill'
                        className="h-10 mx-5 border-[1.9px] border-solid
                      border-custom-white rounded-xl"
                        src={element.path}
                        alt={element.alt}
                      />
                    ),
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
