'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { domine } from '../../styles/fonts';
import CriarProjetos from './criar-projeto';
import { useToggleVisibility } from '../../../hooks/use-toggle-visibility';
import { useFetchProjects } from '../../../hooks/use-fetch-projects';


function ProjectList({ projects, visibility, toggleVisibility }) {
  return (
    <div className="flex justify-evenly items-start flex-wrap">
      {Object.keys(projects || {}).map((key) =>
        projects[key] ? (
          <CriarProjetos
            key={key}
            projectData={projects[key]}
            state={visibility[key]}
            toggleDescription={toggleVisibility(key)}
          />
        ) : (
          <div key={key} className="error">Error: {key} data is not valid</div>
        )
      )}
    </div>
  );
}

ProjectList.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  visibility: PropTypes.objectOf(PropTypes.bool).isRequired,
  toggleVisibility: PropTypes.func.isRequired,
};

/**
 * Data component displays a portfolio section with a list of projects.
 * It fetches project data and manages their visibility states.
 * @returns {React.ReactElement} The rendered Projects component.
 */
export default function Projects() {
  const projectKeys = ['calculadora', 'gedf', 'reanotes', 'spotifyimersaofrontend'];
  const { data, error } = useFetchProjects(projectKeys);
  const { visibility, toggleVisibility } = useToggleVisibility({
    calculadora: true,
    gedf: true,
    reanotes: true,
    spotifyimersaofrontend: true,
  });

  if (error) { return <div className="error">Error fetching projects: {error.message}</div> }

   // Handle loading state
   if (!data || Object.keys(data).length === 0) {
    return <div className="loading">Loading projects...</div>;
  }

  return (
    <section className="w-full bg-dark py-10 rounded-md" id="projetos">
      <div className="projeto__titulo">
        <h5 className={`text-xl my-2 ml-4 md:text-[28px] md:ml-10 font-extralight text-custom-blue text-center sm:text-[22px] ${domine.className}`}>
          Projetos
        </h5>
      </div>
      <ProjectList projects={data} visibility={visibility} toggleVisibility={toggleVisibility} />
    </section>
  );
}
