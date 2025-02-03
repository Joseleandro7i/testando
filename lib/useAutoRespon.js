import { useEffect, useRef, useState } from 'react';

/**
 * Throttle function to limit the rate at which a function can fire.
 * @param {Function} func - The function to throttle.
 * @param function_
 * @param {number} limit - The time limit in milliseconds.
 * @return {Function} - The throttled function.
 */
function throttle(function_, limit) {
  let lastFunction;
  let lastRan;
  return (...arguments_) => {
    if (!lastRan) {
      function_(...arguments_);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunction);
      lastFunction = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          function_(...arguments_);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const positions = [];


/**
 * Throttle function to limit the rate at which a function can fire.
 * @param {supportElem} supportElem - The function to throttle.
 * @param supportElement
 * @param {positionElem} positionElem - The time limit in milliseconds.
 * @param positionElement
 * @return {Function} - The throttled function.
 */
function useAutoRespon(supportElement, positionElement) {
  // Debugging logs to understand the state of refs
  const previousValueReference = useRef(null);  // To hold the previous width
  const penultimateValueReference = useRef(null);  // To hold the penultimate width
  const widthImgElement = useRef([]);  // To store the width history
  const previousPositionImg = useRef(null); // This will hold the previous value
  const penultimatePositionImg = useRef(null);
  const [shouldRunIntervalWidthImg, setShouldRunIntervalWidthImg] = useState(true);
  const [shouldRunIntervalPostionImg, setShouldRunIntervalPostionImg] = useState(true);

  useEffect(() => {

    if (!supportElement && !positionElement) return;

    const getOffset = (element) => {
      let x = 0;
      let y = 0;
      while (element) {
        x += element.offsetLeft - element.scrollLeft;
        y += element.offsetTop - element.scrollTop;
        element = element.offsetParent;
      }
      // console.log(x)
      // console.log(y)
      return { x, y };
    };


    const applyStyles = () => {
      // console.log("DOMContentLoaded is loading");

      // console.log('positionElem:', positionElem);
      // console.log('supportElem:', supportElem);

      const { clientWidth: width, clientHeight: height } = supportElement;
      // console.log('Width and Heigth of supportElem', { width, height });

      const { x, y } = getOffset(supportElement);

      Object.assign(positionElement.style, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      });
    }


    // Function to check responsiveness
    const checkResponsiveness = () => {
      console.log(`Checking responsiveness: ${supportElement}, ${positionElement}`);

      if (supportElement && positionElement) {
        const supportOffset = getOffset(supportElement);
        const positionOffset = getOffset(positionElement);

        if (supportOffset.x !== positionOffset.x || supportOffset.y !== positionOffset.y) {
          applyStyles();
        }
      }
    };

    if (supportElement && positionElement) {
      applyStyles() // Apply styles based on the elements' refs


      // Add window resize event listener, throttled to improve performance
      const handleResize = throttle(() => {
        checkResponsiveness(); // Adjust styling on window resize
      }, 200);

      const handleTime = throttle(() => {
        checkResponsiveness(); // Adjust styling on window resize
      });

      window.addEventListener('resize', handleResize);

      let intervalId;

      const startInterval = () => {
        if (!intervalId) {
          intervalId = setInterval(() => {
            if (shouldRunIntervalWidthImg) {
                      
            }

            // console.log(shouldRunIntervalPostionImg)
            if (shouldRunIntervalPostionImg) {
              // console.log("Make the verification of position of x and y of supportElem");

              

              handleTime(); // Your function here
            }
          }, 1000);
        }
      };

      // // Start the interval initially
      // startInterval();

      // Stop the interval and pause execution
      const stopInterval = () => {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null; // Reset so it can be restarted later
          // console.log("Interval stopped");
        }
      };

      // Continue running the interval (without resetting previous state)
      const continueInterval = () => {
        // console.log("Continuing the interval...");
        startInterval(); // Restart the interval again
      };

      // Example to manually control the interval


      const interval = setInterval(() => {

        const width = supportElement.offsetWidth;
        // console.log("Element width:", width);

        // Only update if the width has changed and is greater than 0
        if (previousValueReference.current !== width && width > 0) {
          widthImgElement.current.push(width);

          // Check that there are at least 2 elements in the array before accessing penultimate value
          if (widthImgElement.current.length >= 2) {
            penultimateValueReference.current = widthImgElement.current[widthImgElement.current.length - 2]; // Penultimate value
          }

          // Update previous value to the current width
          previousValueReference.current = width;
        }

        // console.log("Width history:", widthImgElement.current);
        // console.log("Penultimate value:", penultimateValueRef.current);
        // console.log("Previous value:", previousValueRef.current); 

        // console.log(penultimateValue.current === previousValue.current)
        console.log(penultimateValueReference.current === previousValueReference.current);
        if (penultimateValueReference.current === previousValueReference.current) {
          setShouldRunIntervalWidthImg(false);
          console.log("Stop to run applyStyles");
          applyStyles();  // Apply styles based on the width
  
          stopInterval();
        } else {
          console.log("Start to run applyStyles");
          setShouldRunIntervalWidthImg(true);
          continueInterval();
        }


        // Get the current position of the element
        const { x: currentX, y: currentY } = supportElement.getBoundingClientRect();

        // Initialize penultimatePositionImg and previousPositionImg if they are null
        if (!penultimatePositionImg.current) {
          penultimatePositionImg.current = { x: 0, y: 0 };
        }
        if (!previousPositionImg.current) {
          previousPositionImg.current = { x: 0, y: 0 };
        }

        // Store the current position in previousPositionImg (you could store x and y in an object)
        previousPositionImg.current = { x: currentX, y: currentY };

        positions.push(previousPositionImg.current);

        if (positions.length > 2) {
          penultimatePositionImg.current = positions[positions.length - 2]; // Set to the penultimate
        }


        // console.log("Penultimate Position:", penultimatePositionImg.current);
        // console.log("Previous Position:", previousPositionImg.current);
        applyStyles();

        // Check if the position has changed (x or y)
        console.log(penultimatePositionImg.current.x === previousPositionImg.current.x &&
          penultimatePositionImg.current.y === previousPositionImg.current.y)
        if (penultimatePositionImg.current.x === previousPositionImg.current.x &&
          penultimatePositionImg.current.y === previousPositionImg.current.y) {
          console.log("Position unchanged, stop applying styles");
          setShouldRunIntervalPostionImg(false);
          stopInterval();
        } else {
          // console.log("Position changed, applying styles");
          applyStyles();
          setShouldRunIntervalPostionImg(true);
          continueInterval();
        }
      }, 2000); // Check every second

      // Clean up the event listeners on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
        clearInterval(intervalId);
        clearInterval(interval); // Cleanup on component unmount
      };
    }
  }, [positionElement, supportElement]);  // Empty dependency array means this effect runs only once on mount

  return null;
}

export default useAutoRespon;
