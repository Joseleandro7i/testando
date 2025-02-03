// axeConfig.js
import React from 'react';
import ReactDOM from 'react-dom';
import axe from 'react-axe';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}