import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 * Footer é um componente funcional React que representa
 * a seção de rodapé do meu portfólio.
 * @return {ReactElement} O elemento de layout renderizado.
 */
export default function Footer() {
  return (
    <>
      <footer className="h-auto px-4 w-full flex flex-col items-center">
        <Image
          className="mt-2 mb-3"
          src="/img/logo.png"
          alt="Foto do desenvolvedor do site josé leandro"
        />
        <p className="px-2">
          &copy; Construido e desenvolvido por José leandro do nascimento
        </p>
        <Link
          className="text-lg underline px-3 hover:text-xl active:text-base"
          href="/uso-imagens"
        >
          Imagens autorais
        </Link>
      </footer>
    </>
  );
}
