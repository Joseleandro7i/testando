import React from 'react';
import Apresentacao from '../app/components/apresentacao';
import Skills from '../app/components/skills';
import Formacoa from '../app/components/formacao';
import FormacoesCursos from '../app/components/formacoes-cursos';
import Projetos from '../app/components/projetos/projetos';
import Contato from '../app/components/contato';
import Footer from '../app/components/footer';
import Head from 'next/head';

/**
 * Index é React component que agrupa e rendenizar todos os outros componetes
 * @return {ReactElement} The rendered layout element.
 */
export default function Index() {
  return (
    <>
      <Head>
        <title>Portfólio - José leandro</title>
        <meta
          name="description"
          content="Bem-vindo ao meu portfólio! Sou José Leandro do Nascimento,
          um desenvolvedor JavaScript com experiência
           em desenvolvimento front-end.
          Meu portfólio destaca os projetos que desenvolvi,
          demonstrando minhas habilidades e conhecimentos
          em tecnologias modernas como
          React.js, Next.js, Tailwind CSS, entre outras."
        />
      </Head>
      <main className="flex justify-evenly items-center flex-col">
        <Apresentacao />
        <Skills />
        <Formacoa />
        <FormacoesCursos />
        <Projetos />
        <Contato />
      </main>

      <footer className="h-40">
        <Footer />
      </footer>
    </>
  );
}
