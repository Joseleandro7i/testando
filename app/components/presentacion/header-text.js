import React from 'react';
import PropTypes from 'prop-types';
import { domine } from '../../styles/fonts';

/**
 * Component for displaying header text with specific styles.
 */
const HeaderText = ({ className, children }) => (
  <h1 className={`${className} mt-3 text-3xl w-3/4 text-center md:text-4xl ${domine.className}`}>
    {children}
  </h1>
);

HeaderText.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired, // Updated to node for more flexibility
};
