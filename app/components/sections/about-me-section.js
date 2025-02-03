import React from 'react';
import { ABOUT_ME_TEXT } from '../../constants/content';
import { domine } from '../../styles/fonts';

export default function AboutMeSection() {
  return (
    <section className="flex flex-col justify-evenly w-full items-center h-auto py-0 md:py-12 bg-dark">
      <div className="flex items-start w-full">
      <h3
            className={`text-xl my-2 ml-4 md:text-[28px]
             md:ml-10 font-extralight text-custom-blue 
             text-center sm:text-[22px] ${domine.className}`}
          >
            Sobre mim
          </h3>
      </div>
      <p className="text-base my-2 w-4/5 sm:text-[17px] md:text-lg">{ABOUT_ME_TEXT}</p>
    </section>
  );
}
