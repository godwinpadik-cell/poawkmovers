/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MoveProcess } from './components/MoveProcess';
import { MovePackages } from './components/MovePackages';
import { HospitalMoveCaseStudy } from './components/HospitalMoveCaseStudy';
import { ServicesSection } from './components/ServicesSection';
import { QuoteEstimator } from './components/QuoteEstimator';
import { EightWeekChecklist } from './components/EightWeekChecklist';
import { InventoryCalculator } from './components/InventoryCalculator';
import { AccraMovingGuide } from './components/AccraMovingGuide';
import { ComparisonGuide } from './components/ComparisonGuide';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { TrackMoveModal } from './components/TrackMoveModal';
import { VirtualSurveyModal } from './components/VirtualSurveyModal';
import { QuoteRequest } from './types';
import { MessageSquare, Phone, Search, Video } from 'lucide-react';

export default function App() {
  const [modalQuote, setModalQuote] = useState<{
    quote: QuoteRequest;
    totalGhs: number;
    totalUsd: number;
  } | null>(null);

  const [trackingOpen, setTrackingOpen] = useState(false);
  const [virtualSurveyOpen, setVirtualSurveyOpen] = useState(false);

  const scrollToQuote = () => {
    const el = document.getElementById('quote-estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToInventory = () => {
    const el = document.getElementById('inventory-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyInventory = (cbm: number, count: number) => {
    scrollToQuote();
  };

  const handleGenerateManifest = (quote: QuoteRequest, totalGhs: number, totalUsd: number) => {
    setModalQuote({ quote, totalGhs, totalUsd });
  };

  const handleSelectPackage = (packageId: string) => {
    scrollToQuote();
  };

  const handleSelectService = (serviceName: string) => {
    scrollToQuote();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">
      
      {/* 2-Tier Header: Top Utility Strip & Main Navigation */}
      <Navbar 
        onOpenQuote={scrollToQuote}
        onOpenTracking={() => setTrackingOpen(true)}
        onOpenVirtualSurvey={() => setVirtualSurveyOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        
        {/* Poawk Property Movers Homepage Hero with In-Hero Free Quote Intake Widget */}
        <Hero
          onScrollToQuote={scrollToQuote}
          onOpenVirtualSurvey={() => setVirtualSurveyOpen(true)}
          onOpenInventory={scrollToInventory}
        />

        {/* 5-Step Relocation Flow: "Moving Made Easy. Every Step of the Way." */}
        <MoveProcess
          onStartEstimate={scrollToQuote}
          onOpenVirtualSurvey={() => setVirtualSurveyOpen(true)}
        />

        {/* Poawk Property Movers Tiered Packages: Essential vs Full-Service vs Full-Value Protection */}
        <MovePackages onSelectPackage={handleSelectPackage} />

        {/* Proven Healthcare Case Study: SIC Hospital & Clinical Lab Relocation */}
        <HospitalMoveCaseStudy />

        {/* 5 Core Relocation Pillars with High-Resolution Photography */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Instant Quote Estimator with GH₵ & USD Rates */}
        <QuoteEstimator onGenerateManifest={handleGenerateManifest} />

        {/* Interactive 8-Week Accra Moving Checklist */}
        <EightWeekChecklist />

        {/* Room-by-Room CBM Volume & Truck Size Planner */}
        <InventoryCalculator onApplyInventory={handleApplyInventory} />

        {/* Accra Traffic Advisory & Gated Estate Logistics */}
        <AccraMovingGuide />

        {/* Accra Market Moving Companies Comparison Guide */}
        <ComparisonGuide />

        {/* Attributable Client Evidence & FAQ */}
        <Testimonials />

        {/* Ayawaso Headquarters & Direct Move Survey Form */}
        <ContactSection />

      </main>

      {/* Poawk Property Movers Mega Footer with Consumer Protection Notice */}
      <Footer 
        onOpenTracking={() => setTrackingOpen(true)}
        onOpenVirtualSurvey={() => setVirtualSurveyOpen(true)}
        onOpenQuote={scrollToQuote}
      />

      {/* Official Printable Move Manifest Modal */}
      {modalQuote && (
        <QuoteModal
          quote={modalQuote.quote}
          totalGhs={modalQuote.totalGhs}
          totalUsd={modalQuote.totalUsd}
          onClose={() => setModalQuote(null)}
        />
      )}

      {/* MyPoawk Move Tracker Modal (Shipment Tracking Portal) */}
      <TrackMoveModal
        isOpen={trackingOpen}
        onClose={() => setTrackingOpen(false)}
      />

      {/* Virtual Home Video Survey Modal */}
      <VirtualSurveyModal
        isOpen={virtualSurveyOpen}
        onClose={() => setVirtualSurveyOpen(false)}
      />

      {/* Mobile Floating Action Bar (Under 15% viewport height cap) */}
      <aside aria-label="Quick contact" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 no-print shadow-lg">
        <a
          href="tel:+233240977141"
          className="flex-1 py-2 px-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call Desk</span>
        </a>
        <button
          onClick={() => setVirtualSurveyOpen(true)}
          className="flex-1 py-2 px-2.5 bg-blue-600 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Video className="w-3.5 h-3.5" />
          <span>Virtual Survey</span>
        </button>
        <a
          href="https://wa.me/233240977141?text=Hello%20Poawk%20Property%20Movers,%20I%20would%20like%20to%20request%20a%20moving%20quote."
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2 px-2.5 bg-emerald-500 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </aside>

    </div>
  );
}
