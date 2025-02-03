import React from 'react';
import PropTypes from 'prop-types';
import { domine } from '../styles/fonts';

/**
 * Card is a reusable React component to display a card with a title and content.
 * @param {Object} props - Props passed to the component.
 * @param {string} props.title - The title of the card.
 * @param {string} props.content - The content of the card.
 * @returns {ReactElement} Rendered card element.
 */
export default function Card({ title, content }) {
  return (
    <div className="w-10/12 lg:w-2/5 lg:mx-11 mx-1 mb-3 py-3">
      <h5
        className={`text-[28px] my-2 w-11/12 font-extralight
         text-center ${domine.className}`}
      >
        {title}
      </h5>
      <p
        className="flex items-center bg-transparent border-[1px]
       border-solid w-11/12 border-custom-white rounded-xl
       flex-col justify-evenly mb-2 h-auto sm:ml-2 py-5 px-7"
      >
        {content.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
