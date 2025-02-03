import React from 'react';
import Skills from '../app/components/skills';
import Footer from '../app/components/footer';
import Head from 'next/head';
import Presentation from '../app/components/presentation';
import { META_DESCRIPTION } from '../app/constants/date-index';
import Formation from '../app/components/formation';
import Courses from '../app/components/courses';
import Contact from '../app/components/contact';
import Projects from '../app/components/projetos/projects';

/**
 * Index is the main React component that groups and renders all other components
 * for the portfolio application.
 * @returns {ReactElement} The rendered layout element.
 */
export default function Index() {
  return (
    <>
      <Head>
        <title>Portfólio - José leandro</title>
        <meta
          name="description"
          content={META_DESCRIPTION}
        />
      </Head>
      <main className="flex justify-evenly items-center flex-col">
        <Presentation />
        <Skills />
        <Formation />
        <Courses />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
