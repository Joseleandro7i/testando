import React from 'react';
import PropTypes from 'prop-types';
import { Domine } from 'next/font/google';
import Image from 'next/image';

 
const domine = Domine({
  subsets: ['latin'],
  weight: '500',
});

/**
 * Component for displaying a profile image.
 *
 * @param {Object} props - Component props.
 * @param {string} props.src - Source URL of the image.
 * @param {string} props.alt - Alt text for the image.
 * @return {React.ReactElement} The rendered profile image.
 */
const ProfileImage = ({ src, alt }) => (
  <Image
    width={100}
    height={112}
    className="rounded-full w-auto h-auto md:h-36 mt-2"
    src={src}
    alt={alt}
  />
);

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

/**
 * Component for displaying a social media link with an icon.
 *
 * @param {Object} props - Component props.
 * @param {string} props.href - URL of the social media profile.
 * @param {string} props.src - Source URL of the icon image.
 * @param {string} props.alt - Alt text for the icon.
 * @return {React.ReactElement} The rendered social media link.
 */
const SocialLink = ({ href, src, alt }) => (
  <a href={href}>
    <Image
      width={28}
      height={28}
      src={src}
      alt={alt}
      className="w-7 sm:w-8 cursor-pointer hover:h-[35px]
      hover:w-[35px] hover:mb-[0.2px] active:h-[39px] active:w-[39px]"
    />
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

/**
 * Component for displaying header text with a specific style.
 *
 * @param {Object} props - Component props.
 * @param {string} props.className - Additional CSS classes for styling.
 * @param {React.ReactNode} props.children - The text content to display.
 * @return {React.ReactElement} The rendered header text.
 */
const HeaderText = ({ className, children }) => (
  <h1
    className={`${className} mt-3 text-3xl w-3/4 
  text-center md:text-4xl ${domine.className}`}
  >
    {children}
  </h1>
);

HeaderText.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

/**
 * Main component for displaying the presentation section.
 *
 * @return {React.ReactElement} The rendered presentation section.
 */
export default function Apresentacao() {
  return (
    <>
      <section className="flex h-[440px] justify-evenly pt-9">
        <div
          className="flex flex-col items-center
        justify-evenly rounded-full h-350 w-full"
        >
          <ProfileImage
            src="/img/Foto - José leandro.png"
            alt="Foto do desenvolvedor do site José Leandro"
          />
          <HeaderText>Olá, tudo bem, Meu nome é José Leandro</HeaderText>
          <h2
            className={`
            text-lg mx-6 my-3 sm:text-lg md:text-2xl
             text-custom-blue ${domine.className}`}
          >
            Desenvolvedor Front-End
          </h2>
          <div className="flex h-12 justify-evenly">
            <SocialLink
              href="https://github.com/Jose-leandro"
              src="/img/github.png"
              alt="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/jose-leandro"
              src="/img/linkedin.png"
              alt="LinkedIn"
            />
          </div>
        </div>
      </section>
      <section
        className="flex flex-col justify-evenly w-full
       items-center h-auto py-0 md:py-12 bg-dark"
      >
        <div className="flex items-start w-full">
          <h3
            className={`text-xl my-2 ml-4 md:text-[28px]
             md:ml-10 font-extralight text-custom-blue 
             text-center sm:text-[22px] ${domine.className}`}
          >
            Sobre mim
          </h3>
        </div>
        <p className="text-base my-2 w-4/5 sm:text-[17px] md:text-lg">
          Olá!
          <br />
          Me chamo José Leandro do Nascimento e sou um apaixonado desenvolvedor
          front-end. Desde jovem, meu fascínio pela tecnologia tem sido uma
          constante fonte de inspiração.
          <br />
          <br />
          Recordo-me vividamente dos momentos em que assistia a séries e filmes
          que exploravam este universo, despertando em mim uma inesgotável
          curiosidade e desejo de aprendizado. Esta paixão, aliada a uma série
          de motivos, impulsionou minha jornada rumo ao desenvolvimento web.
          <br />
          <br />
          Além do mundo da programação, encontro grande prazer em me aventurar
          na leitura, nos jogos e na vasta paisagem dos filmes e séries.
          Aprimorar minhas habilidades culinárias também é uma forma de
          equilíbrio em minha vida.
          <br />
          <br />
          Meu objetivo é alcançar a excelência como desenvolvedor front-end,
          aproveitando ao máximo as oportunidades que esta profissão oferece.
          Estou constantemente em busca de aprimoramento, sempre sedento por
          novos conhecimentos e desafios.
          <br />
          <br />
          Junte-se a mim nesta jornada de descoberta e crescimento no mundo
          fascinante da tecnologia!
        </p>
      </section>
    </>
  );
}
