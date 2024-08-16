import React from 'react';
import PropTypes from 'prop-types';

/**
 * RootLayout is a React component that sets up the page layout.
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The content to render within the layout.
 * @return {ReactElement} The rendered layout element.
 */
function RootLayout({ children }) {
  return <div>{children}</div>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
