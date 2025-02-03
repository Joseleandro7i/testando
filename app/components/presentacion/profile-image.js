import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for displaying a profile image.
 */
const ProfileImage = ({ src, alt }) => (
    <Image
      width={100}
      height={112}
      className="rounded-full w-auto h-auto md:h-36 mt-2"
      src={src}
      alt={alt}
    />
  );
  
  ProfileImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };