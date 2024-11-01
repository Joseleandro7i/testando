'use client';
import React, { useEffect, useState } from 'react';
import { Domine } from 'next/font/google';
import CriarProjetos from './criarProjeto';

 
const domine = Domine({
  subsets: ['latin'],
  weight: '500',
});

/**
 * Projetos é um componente React que faz parte do meu portfólio.
 * Este componente exibe uma lista de projetos e informações relevantes,
 * destacando minhas habilidades e experiências profissionais.
 * @return {React.ReactElement} Renderiza uma parte do meu portfólio.
 */
export default function Projetos() {
  const [temDadosProjetos, setTemDadosProjetos] = useState({});
  const [estaClicadoX, setEstaClicadoX] = useState(false);
  const [estaVisivel, setEstaVisivel] = useState({
    calculadora: true,
    gedf: true,
    reanotes: true,
    spotifyimersaofrontend: true,
  });

  const handleToggleVisibility = (projectKey) => {
    setEstaClicadoX((prevState) => {
      const novoEstado = !prevState;
      return novoEstado;
      console.log('Novo estado calculado:', novoEstado);
    });

    setEstaVisivel((prevState) => {
      const newState = { ...prevState };

        console.log(estaClicadoX)
        Object.keys(newState).forEach((key) => {
          if (estaClicadoX) {
            console.log(newState[key] = true)
          } else {
            console.log(newState[key] = key === projectKey ? newState[projectKey] : !newState[projectKey])
          }
      });
      console.log(newState)
      return newState; // Return the new state of visibility
    });
  };


  useEffect(() => {
    const projectKeys = [
      'calculadora',
      'gedf',
      'reanotes',
      'spotifyimersaofrontend',
    ];
    projectKeys.forEach((key) => {
      fetch(`http://localhost:8000/${key}`)
        .then((response) => response.json())
        .then((results) => {
          const extractedData = results[0];
          if (extractedData) {
            setTemDadosProjetos((prevState) => ({
              ...prevState,
              [key]: extractedData,
            }));
          } else {
            console.log(`Error: ${key} data is empty or null.`);
          }
        })
        .catch((error) => {
          console.error(`Error fetching ${key} data:`, error);
        });
    });
  }, []);

  return (
    <section
      className="w-full bg-dark py-10 rounded-md"
      id="projetos"
    >
      <div className="projeto__titulo">
        <h5
          className={`text-xl my-2 ml-4 md:text-[28px] md:ml-10 
          font-extralight
          text-custom-blue
          text-cente
          sm:text-[22px] ${domine.className}`}
        >
          Projetos
        </h5>
      </div>

      <div className="flex justify-evenly items-start flex-wrap">
        {Object.keys(temDadosProjetos).map((key) =>
          temDadosProjetos[key] ? (
            <CriarProjetos
              key={key}
              dateCreateProject={temDadosProjetos[key]}
              state={estaVisivel ? estaVisivel[key] : undefined}
              handleClickProjeto={() => handleToggleVisibility(key)}
            />
          ) : (
            console.log(`Error: ${key} data is not valid`)
          ),
        )}
      </div>
    </section>
  );
}
