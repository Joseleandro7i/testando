import React from "react";
import PropTypes from "prop-types";

/**
 * A Higher-Order Component (HOC) that wraps a given component with a `div` 
 * for positioning, adding an `id` and `ref` to the wrapper.
 *
 * @param {React.ComponentType} WrappedComponent - The component to wrap.
 * @returns {React.FunctionComponent} - The wrapped component with positioning functionality.
 */
const withPositioning = (WrappedComponent) => {
  const WithPositioning = ({ referenceElementPosicionar, assignPositionReference, ...props }) => {
    if (!referenceElementPosicionar) {
      console.warn("withPositioning: Missing `referenceElementPosicionar` prop. Ensure it is provided.");
    }

    return (
      <div id={referenceElementPosicionar || undefined} ref={assignPositionReference}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  const HTMLElement =
  typeof window !== 'undefined' ? window.HTMLElement : Object;

  WithPositioning.propTypes = {
    referenceElementPosicionar: PropTypes.string.isRequired, // The ID for the wrapping div
    assignPositionReference: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) }),
    ]).isRequired, // Ref callback or React ref object
  };

  WithPositioning.displayName = `WithPositioning(${getDisplayName(WrappedComponent)})`; // For debugging

  return WithPositioning;
};

/**
 * Gets the display name of the wrapped component for better debugging.
 * @param {React.ComponentType} WrappedComponent - The component to wrap.
 * @returns {string} The display name of the component.
 */
const getDisplayName = (WrappedComponent) =>
  WrappedComponent.displayName || WrappedComponent.name || "Component";

export default withPositioning;
