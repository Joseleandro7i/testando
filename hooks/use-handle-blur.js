import { useCallback } from "react";
import { errorMessages, typesOfErro } from "../app/constants/date-handle-blur";

/**
 * Gets the error message for the input type and validation error.
 * @param {string} tipoDeInput - The type of input (e.g., email, password).
 * @param {HTMLInputElement} input - The input element to validate.
 * @returns {string} The error message, if any.
 */
const getErrorMessage = (tipoDeInput, input) => {
  for (const erro of typesOfErro) {
    if (input.validity[erro]) {
      return errorMessages[tipoDeInput][erro];
    }
  }
  return "";
};

/**
 * Updates the error display for an input field.
 * @param {HTMLInputElement} input - The input element being validated.
 * @param {string} errorMessage - The error message to display.
 */
const updateErrorDisplay = (input, errorMessage) => {
  const parent = input.parentNode;
  const existingSpan = parent.querySelector(".error-span");

  if (errorMessage) {
    if (existingSpan) {
      existingSpan.textContent = errorMessage;
    } else {
      const span = document.createElement("span");
      span.classList.add("error-span", "text-red-800");
      span.textContent = errorMessage;
      parent.insertBefore(span, input.nextSibling);
    }
  } else if (existingSpan) {
    existingSpan.remove();
  }
};

/**
 * Validates an input field and updates form validity state.
 * @param {HTMLInputElement} input - The input element to validate.
 * @param {Function} setFormValidity - State updater for individual field validity.
 * @param {Object} formValidity - Current form validity state.
 */
const validateInput = (input, setFormValidity, formValidity) => {
  const tipoDeInput = input.dataset.tipo;
  const isValid = input.validity.valid;

  const errorMessage = isValid
    ? ""
    : getErrorMessage(tipoDeInput, input);

  updateErrorDisplay(input, errorMessage);

  setFormValidity((previous) => ({
    ...previous,
    [tipoDeInput]: isValid,
  }));
};

// passing additional arguments, with curry the function
export const useCreateHandleBlur = (setFormValidity, formValidity, setIsFormValid) =>
  useCallback(
    (event, additionalArgument) => {
      const input = event.target;

      validateInput(input, setFormValidity, formValidity);

      // Example usage of additionalArg
      console.log("Additional Argument:", additionalArgument);

      setIsFormValid(Object.values(formValidity).every(Boolean));
    },
    [setFormValidity, formValidity, setIsFormValid]
  );

