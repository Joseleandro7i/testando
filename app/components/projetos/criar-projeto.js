import React from 'react';
import PropTypes from 'prop-types';
import ProjectSection from './sub-componets-criar-projeto/project-section';
import useAutoRespon from '../../../lib/useAutoRespon';
import withProjectLogic from './with-project-logic';

/**
 * The `CriarProjetos` component is responsible for rendering a section 
 * to create or display project details. It integrates positioning logic 
 * and dynamic rendering based on state.
 *
 * @param {Object} props - The component props.
 * @param props.projectData
 * @param props.state
 * @param props.toggleDescription
 * @returns {React.Element | null} - The rendered component or `null` if `projectData` is missing.
 */
const CriarProjetos = ({
  projectData,
  state,
  toggleDescription,
}) => {
  console.log(projectData)
  // Automatically handle positioning logic
  useAutoRespon(
    projectData.refElemSuporte?.current,
    projectData.referenceElementPosicionar?.current
  );

  // Do not render if `projectData` is missing
  if (!projectData) {return undefined;}

  return (
    <div
      className={`h-auto w-auto mt-auto xl:mx-4 2xl:mx-0 justify-evenly flex-col items-center ${
        state ? 'flex' : 'hidden'
      }`}
    >
      <ProjectSection
        projectData={projectData}
        toggleDescription={toggleDescription}
      />
    </div>
  );
};

// Define PropTypes for validation
CriarProjetos.propTypes = {
  projectData: PropTypes.shape({
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
      })
    ).isRequired,
  }).isRequired,
  state: PropTypes.bool.isRequired,
  toggleDescription: PropTypes.func.isRequired,
};

// Wrap the component with additional logic
export default withProjectLogic(CriarProjetos);
