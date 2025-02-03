import React from 'react';
import ProfileSection from './sections/profile-section';
import AboutMeSection from './sections/about-me-section';

/**
 * Main component for displaying the presentation section.
 *
 * @returns {React.ReactElement} The rendered presentation section.
 */
export default function Presentation() {
  return (
    <>
      <ProfileSection />
      <AboutMeSection />
    </>
  );
}
