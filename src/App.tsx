/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WelcomeSection } from './components/WelcomeSection';
import { ExhibitionsSection } from './components/ExhibitionsSection';
import { CuratorSection } from './components/CuratorSection';
import { GalleryGrid } from './components/GalleryGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArtworkModal } from './components/ArtworkModal';
import { DEMO_ARTWORKS, Artwork } from './data/artworks';

export default function App() {
  const [artistName, setArtistName] = useState<string>('Gallery');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [inquirySubject, setInquirySubject] = useState<string>('');
  const [customImageMap, setCustomImageMap] = useState<Record<string, string>>({});

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleArtworkClick = (artworkId: string) => {
    const found = DEMO_ARTWORKS.find((a) => a.id === artworkId);
    if (found) {
      setSelectedArtwork(found);
    }
  };

  const handleSelectForInquiry = (artworkTitle: string) => {
    setInquirySubject(artworkTitle);
    scrollToSection('contact');
  };

  const handleUploadImage = (artworkId: string, dataUrl: string) => {
    setCustomImageMap((prev) => ({
      ...prev,
      [artworkId]: dataUrl,
    }));
  };

  const handleResetImage = (artworkId: string) => {
    setCustomImageMap((prev) => {
      const copy = { ...prev };
      delete copy[artworkId];
      return copy;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#1C1A17] flex flex-col font-sans selection:bg-[#E3D6C1] selection:text-[#1C1A17]">
      {/* Top Header */}
      <Header
        artistName={artistName}
        onUpdateArtistName={setArtistName}
        onNavigate={scrollToSection}
      />

      <main className="flex-1">
        {/* Hero Section: "A Visual Compass in Time" & "Get inspired!" */}
        <HeroSection
          onExploreClick={() => scrollToSection('gallery')}
          onArtworkClick={handleArtworkClick}
          customImageMap={customImageMap}
        />

        {/* Welcome Section: "Welcome!", "PLAN YOUR VISIT" & Opening Hours */}
        <WelcomeSection onPlanVisitClick={() => scrollToSection('contact')} />

        {/* Current Exhibitions & Artist Roster */}
        <ExhibitionsSection
          onArtworkClick={handleArtworkClick}
          customImageMap={customImageMap}
        />

        {/* A word from the curator / Sobre el Artista */}
        <CuratorSection
          artistName={artistName}
          onArtworkClick={handleArtworkClick}
          customImageMap={customImageMap}
        />

        {/* Full Artwork Collection Grid */}
        <GalleryGrid
          artworks={DEMO_ARTWORKS}
          onArtworkClick={handleArtworkClick}
          customImageMap={customImageMap}
        />

        {/* Simple Contact Section for artist inquiries */}
        <ContactSection
          artistName={artistName}
          prefilledArtworkTitle={inquirySubject}
        />
      </main>

      {/* Footer */}
      <Footer artistName={artistName} onNavigate={scrollToSection} />

      {/* Artwork Inspection & Demo Upload Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onSelectForInquiry={handleSelectForInquiry}
        customImageMap={customImageMap}
        onUploadImage={handleUploadImage}
        onResetImage={handleResetImage}
      />
    </div>
  );
}
