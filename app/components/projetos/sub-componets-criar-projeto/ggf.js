import React, { useEffect, useRef, useState } from 'react';
import { Domine } from 'next/font/google';
import PropTypes from 'prop-types';
import useAutoRespon from '../../../lib/useAutoRespon';
import ImageDisplay from './sub-componets-criar-projeto/image-display';
import ScreenOfButtons from './sub-componets-criar-projeto/screen-of-buttons';
import ScreenOfInformationProject from './sub-componets-criar-projeto/screen-of-information-project';

const domine = Domine({
  subsets: ['latin'],
  weight: '500',
});

/**
 * CriarProjetos is a React component that renders project information and interactions.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Project} props.dateCreateProject - The project details.
 * @param {boolean} props.state - The state to determine visibility.
 * @param {Function} props.handleClickProjeto - The function to handle project clicks.
 * @returns {React.ReactElement} The rendered project component.
 */
export default function CriarProjetos({ dateCreateProject, state, handleClickProjeto }) {

  const references = useRef({ refElemSuporte: undefined, referenceElementPosicionar: undefined, });

  const [supportElement, setSupportElement] = useState(undefined);
  const [positionElement, setPositionElement] = useState(undefined);
  const [isVisibleProject, setIsVisibleProject] = useState(false);

  function handleViewClick() { window.open(dateCreateProject.urlDeploy, '_blank')} 
  function handleRepoClick() { window.open(dateCreateProject.urlRepositorio, '_blank')} 

  // Use useEffect to dynamically update refs after the component has mounted
  useEffect(() => {
    setSupportElement(references.current.refElemSuporte);
    setPositionElement(references.current.referenceElementPosicionar);
  }, [supportElement, positionElement, dateCreateProject]);

  useAutoRespon(supportElement, positionElement);

  /**
   * Toggles the visibility of the project description.
   */
//   function handleDescriptionClick() {
//     setIsVisibleProject((previousState) => !previousState); handleClickProjeto();
//   };

//   function assignSupportReference(element) {
//     references.current.refElemSuporte = element;
//   };

//   function assignPositionReference(element) {
//     references.current.referenceElementPosicionar = element;
//   };

  function handleCloseDescription() {
    handleClickProjeto(); setIsVisibleProject(false);
  };

  return (
    <div className={h-auto w-auto flex-wrap ${state ? 'flex flex-col items-center' : 'hidden'} 
    mt-auto xl:mx-4 2xl:mx-0 justify-evenly items-start}>

      <div className="flex flex-col justify-around w-auto h-auto my-6 items-start" id={dateCreateProject.id}>

        <div className="flex flex-col justify-center items-center h-auto">
          <div className="flex justify-center items-center h-auto w-full">

            <ImageDisplay src={dateCreateProject.imgProjeto} ref={assignSupportReference} />
          </div>

          <ScreenOfButtons referenceElementPosicionar={dateCreateProject.referenceElementPosicionar}
            assignPositionReference={assignPositionReference} nomeProjeto={dateCreateProject.nomeProjeto}
            handleDescriptionClick={handleDescriptionClick} handleViewClick={handleViewClick}
            handleRepoClick={handleRepoClick} />

          <ScreenOfInformationProject textoDescricao={dateCreateProject.textoDescricao} numerosImagens={dateCreateProject.numerosImagens} />
        </div>
      </div>
    </div>
  );
}

CriarProjetos.propTypes = {
  dateCreateProject: PropTypes.shape({
    urlDeploy: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    refElemSuporte: PropTypes.string.isRequired,
    referenceElementPosicionar: PropTypes.string.isRequired,
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
};







import React from "react"


export default function ProjectActionButtons(referenceElementPosicionar, assignPositionReference, nomeProjeto, handleDescriptionClick,
  handleViewClick, handleRepoClick) {

  return (

    <div className="items-center rounded-2xl flex flex-col h-44 w-[90%] md:w-[95%] xl:h-[256px] 
          justify-evenly absolute text-center top-auto xl:w-[410px] bg-dark-clear opacity-0 hover:opacity-100"
      id={referenceElementPosicionar} ref={assignPositionReference}>

      <h2 className={`py-2 px-3 sm:my-2 xl:ml-10 font-extralight sm:px-6 bg-ligth-dark rounded-lg 
          text-center sm:py-3 shadow-customShadow ${domine.className}`}>
        {nomeProjeto}
      </h2>

      <div className="flex justify-evenly w-full">

        <button className="cursor-pointer border-[1.9px] border-solid border-custom-white rounded-xl
             p-1 md:py-2 md:px-3 text-center mx-2 text-white h-auto bg-ligth-dark hover:rounded-lg
            active:rounded-md font-serif"     onClick={handleDescriptionClick}>
          Descrição
        </button>

        <button
                className="cursor-pointer border-[1.9px] border-solid
      border-custom-white rounded-xl py-2 px-4 text-center
      mx-2 text-white h-auto bg-ligth-dark hover:rounded-lg
      active:rounded-md font-serif"
                onClick={handleViewClick}>Visualizar</button>

            <button
                className="cursor-pointer border-[1.9px] border-solid
      border-custom-white rounded-xl py-2 px-4 text-center
      mx-2 text-white h-auto bg-ligth-dark hover:rounded-lg
      active:rounded-md font-serif"
                onClick={handleRepoClick}>Repositório</button>
      </div>
    </div>
  )
}


 {/* <div className="flex flex-col w-auto h-auto my-6 items-start" id={dateCreateProject.id}>
        <ProjectImageDisplay src={dateCreateProject.imgProjeto} ref={assignSupportReference} />

        <ProjectActionButtons referenceElementPosicionar={dateCreateProject.referenceElementPosicionar}
          assignPositionReference={assignPositionReference} nomeProjeto={dateCreateProject.nomeProjeto}
          handleDescriptionClick={toggleDescription} urlDeploy={dateCreateProject.urlDeploy}
          urlRepositorio={dateCreateProject.urlRepositorio} />

        <ScreenOfInformationProject
          textoDescricao={dateCreateProject.textoDescricao}
          numerosImagens={dateCreateProject.numerosImagens}
        />
      </div> */}