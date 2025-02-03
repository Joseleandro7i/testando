import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for displaying a social media link with an icon.
 */
const SocialLink = ({ href, src, alt }) => (
  <a href={href}>
    <Image
      width={28}
      height={28}
      src={src}
      alt={alt}
      className="w-7 sm:w-8 cursor-pointer hover:h-[35px]
      hover:w-[35px] hover:mb-[0.2px] active:h-[39px] active:w-[39px]"
    />
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};