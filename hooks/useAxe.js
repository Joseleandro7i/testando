import { useEffect } from 'react';

const useAxe = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      import('@axe-core/react').then(axe => {
        const React = require('react');
        const ReactDOM = require('react-dom');
        axe.default(React, ReactDOM, 1000);
      });
    }
  }, []);
};

export default useAxe;