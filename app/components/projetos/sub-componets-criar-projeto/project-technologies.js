import React from "react";
import PropTypes from "prop-types";
import { domine } from "../../../styles/fonts"; 

/**
 * Renders a list of technologies used in the project with icons.
 *
 * @param {Object} props - Component properties.
 * @param {Object.<string, { path: string, alt: string }>} props.tecnologias - 
 * An object where each key represents a technology, and each value is an object containing 
 * `path` for the image source and `alt` for the alternative text.
 * @returns {React.ReactElement} The rendered component displaying technologies.
 */
export default function ProjectTechnologies({ tecnologias }) {

    return (
      <div className="h-32 flex flex-col justify-evenly">
      <div className="flex justify-evenly flex-col">
        <h2 className={`my-2 ml-1 px-3 py-3 font-extralight w-2/4 bg-ligth-dark rounded-xl text-center ${domine.className}`}>
          Tecnologias utilizadas
        </h2>
      </div>
      <div className="flex justify-center px-2">
          {Object.values(tecnologias).map((element, index) => (
            <img
              key={index}
              className="ml-3 w-8 mx-5 border-[1.9px] border-solid border-custom-white rounded-xl"
              src={element.path}
              alt={element.alt}
            />
          ))}
      </div>
    </div>
    )
  }

  ProjectTechnologies.propTypes = {
    tecnologias: PropTypes.objectOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  ProjectTechnologies.defaultProps = {
    tecnologias: {},
  };
  