import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IMAGE_DIMENSIONS, MineCopywrite } from '../constants/date-footer';

/**
 * Footer é um componente funcional React que representa
 * a seção de rodapé do meu portfólio.
 * @returns {ReactElement} O elemento de layout renderizado.
 */
export default function Footer() {
  return (
    <>
      <footer className="h-40 px-4 w-full flex flex-col items-center">
        <Image
          className="mt-2 mb-3"
          src="/img/logo.png"
          alt="Logo of José Leandro, developer"
          {...IMAGE_DIMENSIONS}
        />
        <p className="px-2">
          {MineCopywrite}
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
