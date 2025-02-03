import React from 'react';
import Head from 'next/head';
import FooterImagens from '../app/components/use-imagens/footer-imagens';
import { descriptionUseOfImagens, metaImagens } from '../app/constants/date-use-imagens';
import MainImagens from '../app/components/use-imagens/main-imagens';

/**
 * Componente funcional que exibe imagens e ícones utilizados em um portfólio.
 *
 * @returns {JSX.Element} Componente React que
 * renderiza as imagens e informações.
 */
const UsoImagens = () => {
  return (
    <>
      <Head>
        <title>Portfólio - Uso de imagens</title>
        <meta
          name="description"
          content={metaImagens}
        />
      </Head>
      <MainImagens />
      <FooterImagens />
    </>
  );
};

export default UsoImagens;