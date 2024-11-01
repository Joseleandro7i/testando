import Head from 'next/head';
import React from 'react';

/**
 * Componente funcional que exibe imagens e ícones utilizados em um portfólio.
 *
 * @return {JSX.Element} Componente React que
 * renderiza as imagens e informações.
 */
const UsoImagens = () => {
  return (
    <>
      <Head>
        <title>Portfólio - Uso de imagens</title>
        <meta
          name="description"
          content="Bem-vindo ao meu portfólio! Esta página contém
          informações sobre o uso de imagens
           de bancos de imagens."
        />
      </Head>
      <main>
        <div
          className="w-full h-24 flex flex-col
        justify-evenly items-center"
        >
          <h1 className="text-xl my-3">
            Imagens e Ícones Utilizados em meu Portfólio
          </h1>
          <p className="mt-2 mb-2 w-[90%]">
            Este projeto faz uso de recursos visuais para ilustrar os conceitos
            e as informações apresentadas. Esses recursos são obtidos de bancos
            de imagens que possuem direitos autorais e regras de uso. Portanto,
            é necessário consultar as informações de cada banco de imagens antes
            de utilizar qualquer recurso visual no projeto.
          </p>
        </div>

        <div className="flex mt-5 mb-2 flex-wrap justify-evenly">
          {iconsData.map((icon, index) => (
            <div
              className="w-[25%] text-center flex flex-col
           justify-evenly items-center mb-2 mt-3"
              key={index}
            >
              <img
                src={icon.imgSrc}
                className="px-2 my-2"
                alt={icon.name}
               
              />

              <div className="w-full flex flex-col text-center">
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto"
                >
                  {icon.name}
                </a>
                <span className="w-auto"> icon by </span>
                <a
                  href="https://icons8.com"
                  className="w-auto text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Icons8
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer className="h-auto px-4 my-4 w-full flex flex-col items-center">
          <img
            className="mt-2 mb-3"
            src="/img/logo.png"
            alt="Foto do desenvolvedor do site josé leandro"
          />
          <p className="px-2 py-3">
            &copy; Construido e desenvolvido por José leandro do nascimento
          </p>
        </footer>
      </main>
    </>
  );
};

export default UsoImagens;

/**
 * Estrutura de dados para as informações de ícones utilizados.
 * Cada objeto contém o caminho da imagem, o nome do ícone e o link relacionado.
 *
 * @type {Array<{imgSrc: string, name: string, link: string}>}
 */
const iconsData = [
  {
    imgSrc: '/img/agile.png',
    name: 'Agile',
    link: 'https://icons8.com/icon/TSLsIg7ynVZR/agile',
  },
  {
    imgSrc: '/img/banco-de-dados.png',
    name: 'Banco de dados',
    link: 'https://icons8.com/icon/gTX71N9d3nWR/banco-de-dados',
  },
  {
    imgSrc: '/img/css.png',
    name: 'Css',
    link: 'https://www.flaticon.com/br/icones-gratis/css',
  },
  {
    imgSrc: '/img/front-end.png',
    name: 'Front End',
    link: 'https://icons8.com/icon/dhecLjnptiQg/front-end',
  },
  {
    imgSrc: '/img/git.png',
    name: 'Git',
    link: 'https://icons8.com/icon/20906/git',
  },
  {
    imgSrc: '/img/github.png',
    name: 'GitHub',
    link: 'https://icons8.com/icon/16318/github',
  },
  {
    imgSrc: '/img/inteligência-artificial.png',
    name: 'Inteligência artificial',
    link: 'https://icons8.com/icon/UhSB60MHvQFR/intelig%C3%AAncia-artificial',
  },
  {
    imgSrc: '/img/linkedin.png',
    name: 'LinkedIn',
    link: 'https://icons8.com/icon/xuvGCOXi8Wyg/linkedin',
  },
  {
    imgSrc: '/img/mysql.png',
    name: 'mysql',
    link: 'https://icons8.com/icon/UFXRpPFebwa2/logo-mysql',
  },
  {
    imgSrc: '/img/react.png',
    name: 'Nativo de reagir',
    link: 'https://icons8.com/icon/123603/nativo-de-reagir',
  },
  {
    imgSrc: '/img/sass.png',
    name: 'atrevimento',
    link: 'https://icons8.com/icon/QBqFNfPPB2Kx/atrevimento',
  },
  {
    imgSrc: '/img/icons8-vite-logo-48.png',
    name: 'vite-logo',
    link: 'https://icons8.com/icon/dJjTWMogzFzg/vite',
  },
  {
    imgSrc: '/img/icons8-typescript-48.png',
    name: 'typescript',
    link: 'https://icons8.com/icon/wpZmKzk11AzJ/typescript',
  },
  {
    imgSrc: '/img/soft-skills.png',
    name: 'Soft Skills',
    link: 'https://icons8.com/icon/Fs48AhL7WFOF/soft-skills',
  },
  {
    imgSrc: '/img/sql.png',
    name: 'Sql',
    link: 'https://icons8.com/icon/vAJD4bPPf091/sql',
  },
  {
    imgSrc: '/img/tailwindcss.png',
    name: 'tailwindcss',
    link: 'https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss',
  },
  {
    imgSrc: '/img/html.png',
    name: 'Html',
    link: 'https://www.flaticon.com/br/icones-gratis/html',
  },
  {
    imgSrc: '/img/javascript.png',
    name: 'Javascript',
    link: 'https://www.flaticon.com/br/icones-gratis/javascript',
  },
];
