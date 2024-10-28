import { useEffect, useRef, useState } from 'react';

/**
 * Throttle function to limit the rate at which a function can fire.
 * @param {Function} func - The function to throttle.
 * @param {number} limit - The time limit in milliseconds.
 * @return {Function} - The throttled function.
 */
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return (...args) => {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}


/**
 * Throttle function to limit the rate at which a function can fire.
 * @param {supportElem} supportElem - The function to throttle.
 * @param {positionElem} positionElem - The time limit in milliseconds.
 * @return {Function} - The throttled function.
 */
function useAutoRespon(supportElem, positionElem) {
  // Debugging logs to understand the state of refs
  const previousValueRef = useRef(null); // This will hold the previous value
  const penultimateValueRef = useRef(null);
  const previousPositionImg = useRef(null); // This will hold the previous value
  const penultimatePositionImg = useRef(null);
  const [shouldRunIntervalWidthImg, setShouldRunIntervalWidthImg] = useState(true);
  const [shouldRunIntervalPostionImg, setShouldRunIntervalPostionImg] = useState(true);

  useEffect(() => {

    if (!supportElem && !positionElem) return;

    const getOffset = (elem) => {
      let x = 0;
      let y = 0;
      while (elem) {
        x += elem.offsetLeft - elem.scrollLeft;
        y += elem.offsetTop - elem.scrollTop;
        elem = elem.offsetParent;
      }
      // console.log(x)
      // console.log(y)
      return { x, y };
    };


    const applyStyles = () => {
      // console.log("DOMContentLoaded is loading");

      // console.log('positionElem:', positionElem);
      // console.log('supportElem:', supportElem);

      const { clientWidth: width, clientHeight: height } = supportElem;
      // console.log('Width and Heigth of supportElem', { width, height });

      const { x, y } = getOffset(supportElem);

      Object.assign(positionElem.style, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      });
    }


    // Function to check responsiveness
    const checkResponsiveness = () => {
      console.log(`Checking responsiveness: ${supportElem}, ${positionElem}`);

      if (supportElem && positionElem) {
        const supportOffset = getOffset(supportElem);
        const positionOffset = getOffset(positionElem);

        if (supportOffset.x !== positionOffset.x || supportOffset.y !== positionOffset.y) {
          applyStyles();
        }
      }
    };

    if (supportElem && positionElem) {
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
              // console.log("Make the verification of width of supportElem");
              const { clientWidth: width } = supportElem;
              penultimateValueRef.current = previousValueRef.current; // Save previous value to penultimate
              previousValueRef.current = width;
              // console.log(penultimateValueRef);
              // console.log(previousValueRef);
              applyStyles();

              handleTime(); // Your function here
            }

            console.log(shouldRunIntervalPostionImg)
            if (shouldRunIntervalPostionImg) {
              console.log("Make the verification of position of x and y of supportElem");

              // Get the current position of the element
              const { x: currentX, y: currentY } = supportElem.getBoundingClientRect();

              // Initialize penultimatePositionImg and previousPositionImg if they are null
              if (!penultimatePositionImg.current) {
                penultimatePositionImg.current = { x: 0, y: 0 };
              }
              if (!previousPositionImg.current) {
                previousPositionImg.current = { x: 0, y: 0 };
              }

              // Save a copy of the previous position to penultimate (not a reference)
              penultimatePositionImg.current = { ...previousPositionImg.current };

              // Store the current position in previousPositionImg (you could store x and y in an object)
              previousPositionImg.current = { x: currentX, y: currentY };

              console.log("Penultimate Position:", penultimatePositionImg.current);
              console.log("Previous Position:", previousPositionImg.current);
              applyStyles();

              handleTime(); // Your function here
            }
          }, 1000);
        }
      };

      // Start the interval initially
      startInterval();

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
        // console.log(penultimateValueRef.current === previousValueRef.current)
        if (penultimateValueRef.current === previousValueRef.current) {
          setShouldRunIntervalWidthImg(false);
          // console.log("Stop to run applyStyles");
          stopInterval();
        } else {
          console.log("Start to run applyStyles");
          setShouldRunIntervalWidthImg(true);
          continueInterval();
        }

        // Check if the position has changed (x or y)
        if (penultimatePositionImg.current.x === previousPositionImg.current.x &&
          penultimatePositionImg.current.y === previousPositionImg.current.y) {
          console.log("Position unchanged, stop applying styles");
          setShouldRunIntervalPostionImg(false);
          stopInterval();
        } else {
          console.log("Position changed, applying styles");
          applyStyles();
          setShouldRunIntervalPostionImg(true);
          continueInterval();
        }
      }, 1000); // Check every second

      // Clean up the event listeners on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
        clearInterval(intervalId);
        clearInterval(interval); // Cleanup on component unmount
      };
    }
  }, [positionElem, supportElem]);  // Empty dependency array means this effect runs only once on mount

  return null;
}

export default useAutoRespon;
