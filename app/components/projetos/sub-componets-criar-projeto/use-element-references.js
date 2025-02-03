import { useRef } from "react";

 /**
   * Assign a reference to a specific key.
   * @param {string} key - The key to associate with the reference.
  * @param {string} references - The references have all refs
   * @returns {(element: HTMLElement | null) => void} A function to assign or clean up the reference.
   */
 const assignReference = (key, references) => (element) => {
  if (!key) { console.warn("assignReference: Key must be a non-empty string."); return; }
   // Clean up the reference if the element is unmounted 
  if (element) { references.current.set(key, element); } else { references.current.delete(key);}
};

/**
 * A reusable hook for managing references to multiple DOM elements.
 *
 * @returns {{
 *   assignReference: (key: string) => (element: HTMLElement | null) => void,
 *   getReference: (key: string) => HTMLElement | undefined,
 *   getAllReferences: () => Map<string, HTMLElement>
 * }}
 */
export default function useElementReferences() {
  // Maintain a map of references
  const references = useRef(new Map());

  /**
   * Retrieve a reference by its key.
   * @param {string} key - The key of the reference to retrieve.
   * @returns {HTMLElement | undefined} - The associated DOM element, or undefined if not found.
   */
  const getReference = (key) => {
    if (!key) { console.warn("getReference: Key must be a non-empty string."); return undefined; }
    return references.current.get(key);
  };

  assignReference(references)

  /**
   * Retrieve all references.
   * @returns {Map<string, HTMLElement>} - A map of all references.
   */
  const getAllReferences = () => references.current;

  return { assignReference, getReference, getAllReferences };
}
