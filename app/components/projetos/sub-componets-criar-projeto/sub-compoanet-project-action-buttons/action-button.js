// ActionButton.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ActionButton component renders an individual action button.
 * 
 * @param {Object} props - The props for the button.
 * @param {string} props.label - The label for the button.
 * @param {function} props.onClick - The function to execute when the button is clicked.
 * @returns {JSX.Element} The rendered button.
 */
const ActionButton = ({ label, onClick }) => (
  <button
    className="cursor-pointer border-[1.9px] border-solid border-custom-white rounded-xl py-2 px-4 text-center mx-2 text-white h-auto bg-ligth-dark hover:rounded-lg active:rounded-md font-serif"
    onClick={onClick}
    aria-label={label}
  >
    {label}
  </button>
);

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;

