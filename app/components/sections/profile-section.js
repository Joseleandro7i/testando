import React from 'react';
import { SOCIAL_LINKS } from '../../constants/social-links';
import Image from 'next/image';
import { domine } from '../../styles/fonts';
import PropTypes from 'prop-types';


/**
 * Component for displaying a social media link with an icon.
 *
 * @param {Object} props - Component props.
 * @param {string} props.href - URL of the social media profile.
 * @param {string} props.src - Source URL of the icon image.
 * @param {string} props.alt - Alt text for the icon.
 * @returns {React.ReactElement} The rendered social media link.
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

export default function ProfileSection() {
  return (
    <section className="flex h-[440px] justify-evenly pt-9">
      <div className="flex flex-col items-center justify-evenly rounded-full h-350 w-full">
        <ProfileImage
          src="/img/Foto - José leandro.png"
          alt="Foto do desenvolvedor do site José Leandro"
        />
        <HeaderText>Olá, tudo bem, Meu nome é José Leandro</HeaderText>
        <h2
          className={`text-lg mx-6 my-3 sm:text-lg md:text-2xl text-custom-blue ${domine.className}`} >
          Desenvolvedor Front-End
        </h2>
        <div className="flex h-12 justify-evenly">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink
              key={link.href}
              href={link.href}
              src={link.src}
              alt={link.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
