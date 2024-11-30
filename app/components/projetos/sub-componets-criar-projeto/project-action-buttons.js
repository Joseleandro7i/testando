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

// Define constants for reusable class names
const containerClass = "items-center rounded-2xl flex flex-col h-44 w-[90%] md:w-[95%] xl:h-[256px] justify-evenly absolute text-center top-auto xl:w-[410px] bg-dark-clear opacity-0 hover:opacity-100";

const headingClass = "py-2 px-3 sm:my-2 xl:ml-10 font-extralight sm:px-6 bg-ligth-dark rounded-lg text-center sm:py-3 shadow-customShadow font-domine";


const getButtonClass = (isActive, isHovered) => clsx(
  "cursor-pointer border-[1.9px] border-solid border-custom-white rounded-xl py-2 px-4 text-center mx-2 text-white h-auto bg-ligth-dark font-serif",
  {
    "hover:rounded-lg": isHovered,
    "active:rounded-md": isActive
  }
);

/**
 * ProjectActionButtons component renders action buttons for a project.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {string} props.referenceElementPosicionar - The ID for positioning the element.
 * @param {function} props.assignPositionReference - Ref callback for positioning.
 * @param {string} props.nomeProjeto - The name of the project to display.
 * @param {function} props.handleDescriptionClick - Click handler for the description button.
 * @param {function} props.handleViewClick - Click handler for the view button (not used directly).
 * @param {string} props.urlDeploy - The URL to deploy the project.
 * @param {string} props.urlRepositorio - The URL to the project's repository.
 * 
 * @returns {JSX.Element} The rendered component.
 */
const ProjectActionButtons = ({ referenceElementPosicionar, assignPositionReference, nomeProjeto, handleDescriptionClick,
  handleViewClick, urlDeploy, urlRepositorio }) => {

  const handleVisualizarClick = () => openLink(urlDeploy);
  const handleRepositorioClick = () => openLink(urlRepositorio);

  const buttons = [
    { label: "Descrição", onClick: handleDescriptionClick },
    { label: "Visualizar", onClick: handleVisualizarClick },
    { label: "Repositório", onClick: handleRepositorioClick }
  ];

  return (
    <div className={containerClass}
      id={referenceElementPosicionar} ref={assignPositionReference} >

      <h2 className={headingClass} >
        {nomeProjeto} </h2>

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
  referenceElementPosicionar: PropTypes.string.isRequired,
  assignPositionReference: PropTypes.func.isRequired,
  nomeProjeto: PropTypes.string.isRequired,
  handleDescriptionClick: PropTypes.func.isRequired,
  handleViewClick: PropTypes.func, 
  urlDeploy: PropTypes.string.isRequired,
  urlRepositorio: PropTypes.string.isRequired
};

// Add default props
ProjectActionButtons.defaultProps = {
  handleViewClick: () => console.warn("No view click handler provided"),
};

// Wrap the component with the HOC during export
export default withPositioning(ProjectActionButtons);