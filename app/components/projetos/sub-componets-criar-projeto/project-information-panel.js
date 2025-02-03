import React from "react";
import PropTypes from "prop-types";
import ProjectTechnologies from "./project-technologies";

function ProjectInformationPanel({ projectData, isVisible, onClosePanel }) {
  const { projectDescription, technologies } = projectData;

  return (
    <div className={`bg-transparent border-[1.9px] border-solid border-custom-white 
          rounded-xl p-6 text-center h-auto w-3/5 mt-16 ${isVisible ? "visible" : "hidden"}`}>
      {/* Close Button */}

      <div className="flex flex-col w-auto h-auto items-end mb-2">
        <button className="py-1 px-2 bg-transparent border-[1.9px] border-solid border-custom-white 
        rounded" onClick={onClosePanel}>
          X
        </button>
      </div>

      {/* Project Description */}
      <p className="flex items-center leading-6 mb-4 text-left">
        {projectDescription}
      </p>

      {/* Technologies */}
      <ProjectTechnologies tecnologias={technologies} />
    </div>
  );
}

// PropTypes
ProjectInformationPanel.propTypes = {
    projectData: PropTypes.shape({
      projectDescription: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  isVisible: PropTypes.bool,
  onClosePanel: PropTypes.func.isRequired,
};

// Default props
ProjectInformationPanel.defaultProps = {
  isVisible: false,
  technologies: [],
};

export default ProjectInformationPanel;
