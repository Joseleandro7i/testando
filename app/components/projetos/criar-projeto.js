import React from 'react';
import PropTypes from 'prop-types';
import ProjectSection from './sub-componets-criar-projeto/project-section';
import useAutoRespon from '../../../lib/useAutoRespon';
import withProjectLogic from './with-project-logic';

const classes = {
  rootContainer: 'h-auto w-auto mt-auto xl:mx-4 2xl:mx-0 justify-evenly flex-col items-center',
  visible: 'flex',
  hidden: 'hidden',
};

const CriarProjetos = ({
  dateCreateProject,
  state,
  references,
  assignSupportReference,
  toggleDescription
}) => {

  useAutoRespon(references.current.refElemSuporte, references.current.referenceElementPosicionar);

  if (!dateCreateProject) {return undefined}

  return (
    <div className={`${classes.rootContainer} ${state ? classes.visible : classes.hidden}`}>
      <ProjectSection
        dateCreateProject={dateCreateProject}
        assignSupportReference={assignSupportReference}
        toggleDescription={toggleDescription}
      />
    </div>
  );
};

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
      })
    ).isRequired,
  }).isRequired,
  state: PropTypes.bool.isRequired,
  references: PropTypes.object.isRequired,
  assignSupportReference: PropTypes.func.isRequired,
  toggleDescription: PropTypes.func.isRequired,
  supportElement: PropTypes.any,
  positionElement: PropTypes.any,
};

// Wrap the component with the HOC during export
export default withProjectLogic(CriarProjetos);
