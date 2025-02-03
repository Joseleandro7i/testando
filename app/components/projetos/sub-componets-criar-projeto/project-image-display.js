import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

// Extract styles into a constant for readability
const imageStyles = `
  w-auto sm:w-[450px] sm:h-60 rounded-2xl border-[1.9px] border-solid 
  border-custom-white md:w-[350px] md:h-52 xl:h-64 xl:w-[410px]
`;

// ProjectImage component
function ProjectImage({ src, imageRef }) {
  return (
    <Image
      className={imageStyles}
      src={src}
      width={250}
      height={176}
      ref={imageRef}
      alt="Images representing the technologies used in each project."
    />
  );
}

const HTMLElement =
  typeof window !== 'undefined' ? window.HTMLElement : Object;

// Define PropTypes
ProjectImage.propTypes = {
  src: PropTypes.string.isRequired,
  imageRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) }),
  ]),
};

// Set default props
ProjectImage.defaultProps = {
  imageRef: undefined,
};

export default ProjectImage;
