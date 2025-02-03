import React from 'react';
import PropTypes from 'prop-types';
import { domine } from '../styles/fonts';
import Card from './card';
import { FORMATIONS } from '../constants/formacao-data';


/**
 * Formation is a React component that sets up the page layout.
 * @returns {ReactElement} The rendered layout element.
 */
export default function Formation() {
  return (
    <section className="bg-dark py-10 w-full">
      <div>
        <h4
          className={`
          text-xl my-2 ml-4 md:text-[28px] md:ml-10 
           font-extralight
           text-custom-blue
           text-cente
           sm:text-[22px] ${domine.className}`}
        >
          Formações
        </h4>
      </div>

      <div
        className="flex justify-evenly flex-wrap flex-col
        items-center lg:flex-row lg:items-start lg:justify-start"
      >

        {FORMATIONS.map((formation, index) => (
          <Card key={index} title={formation.title} content={formation.content} />
        ))}

    </div>
    </section >
  );
}
