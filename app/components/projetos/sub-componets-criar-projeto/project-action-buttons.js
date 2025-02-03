import React from "react";
import PropTypes from "prop-types";
import withPositioning from "./with-positioning";
import ActionButton from "./sub-compoanet-project-action-buttons/action-button";
import clsx from 'clsx';

/**
 * Opens a given URL in a new tab.
 * 
 * @param {string} url - The URL to open.
 * @returns {Window|null} The window object of the newly opened tab or null if it failed.
 */
const openLink = (url) => window.open(url, '_blank');


const headingClass = "py-2 px-3 sm:my-2 xl:ml-10 font-extralight sm:px-6 bg-ligth-dark rounded-lg text-center sm:py-3 shadow-customShadow font-domine";


const getButtonClass = (isActive, isHovered) => clsx(
  "cursor-pointer border-[1.9px] border-solid border-custom-white rounded-xl py-2 px-4 text-center mx-2 text-white h-auto bg-ligth-dark font-serif",
  {
    "hover:rounded-lg": isHovered,
    "active:rounded-md": isActive
  }
);

/**
 * @param {Object} projectData - The data related to the project.
 * @param {string} projectData.referenceElementPosition - The ID for positioning the element.
 * @param {string} projectData.ProjectName - The name of the project to display.
 * @param {string} [projectData.urlDeploy] - The URL to deploy the project.
 * @param {string} [projectData.urlRepository] - The URL to the project's repository.
 * @param {function} projectData.toggleDescription - Click handler for the description button.
 * @returns {JSX.Element} The rendered component.
 */
function ProjectActionButtons( projectData ) {

  const  {
    referenceElementPosition, ProjectName, urlDeploy, urlRepository, toggleDescription } = projectData;

  const handleVisualizarClick = () => openLink(urlDeploy);
  const handleRepositorioClick = () => openLink(urlRepository);

  const buttons = [
    { label: "Descrição", onClick: handleVisualizarClick },
    { label: "Visualizar", onClick: handleVisualizarClick },
    { label: "Repositório", onClick: handleRepositorioClick }
  ];

  return (
    <div className="items-center rounded-2xl flex flex-col h-44 w-[90%] md:w-[95%] xl:h-[256px]
     justify-evenly absolute text-center top-auto xl:w-[410px] bg-dark-clear opacity-0 
     hover:opacity-100" id={referenceElementPosition} ref={referenceElementPosition} >

      <h2 className={headingClass} >
        {ProjectName} </h2>

      <div className="flex justify-evenly w-full">
        {buttons.map((button) => (
          <ActionButton className={getButtonClass(false, true)} key={button.label} label={button.label} onClick={button.onClick} />
        ))}
      </div>
    </div>
  );
}


// PropTypes validation
ProjectActionButtons.propTypes = {
  projectData: PropTypes.shape({
    referenceElementPosition: PropTypes.string.isRequired,
    ProjectName: PropTypes.string.isRequired,
    urlDeploy: PropTypes.string,
    urlRepository: PropTypes.string,
    toggleDescription: PropTypes.func.isRequired,
  }).isRequired,
};

// Default props for fallback values
ProjectActionButtons.defaultProps = {
  projectData: {
    urlDeploy: undefined,
    urlRepository: undefined,
  },
};

// Wrap the component with the HOC during export
export default withPositioning(ProjectActionButtons);