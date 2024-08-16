import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Documento é um componente de documento personalizado para Next.js.
 * É usado para aumentar o aplicativo <html> e <body> tags.
 * @return {React.ReactElement} O elemento React que
 *  representa a estrutura do documento.
 */
export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/img/logo.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
