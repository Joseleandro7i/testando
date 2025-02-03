import React from "react";
import PropTypes from "prop-types";
import ProjectActionButtons from "./project-action-buttons";
import ProjectInformationPanel from "./project-information-panel";
import ProjectImage from "./project-image-display";

export default function ProjectSection( projectData ) {
  const {
    urlDeploy,
    id,
    refElemSuporte,
    referenceElementPosicionar,
    imgProjeto,
    nomeProjeto,
    urlRepositorio,
    textoDescricao,
    numerosImagens
  } = projectData;


  return (
    <div className="flex flex-col w-auto h-auto my-6 items-start" id={id}>

      <ProjectImage src={imgProjeto} ref={refElemSuporte} />

      <ProjectActionButtons projectData={projectData} />
      <ProjectInformationPanel projectData={projectData} />

    </div>
  );
}

// Define prop types for better clarity and validation
ProjectSection.propTypes = {
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
};