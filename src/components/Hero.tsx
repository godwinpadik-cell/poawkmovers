import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Video, 
  Calendar, 
  Home, 
  Building2, 
  Truck, 
  Sparkles,
  Phone
} from 'lucide-react';
import { MoveType } from '../types';

interface HeroProps {
  onScrollToQuote: () => void;
  onOpenVirtualSurvey: () => void;
  onOpenInventory: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToQuote,
  onOpenVirtualSurvey,
  onOpenInventory
}) => {
  const [heroMoveType, setHeroMoveType] = useState<'residential' | 'corporate' | 'small-move'>('residential');
  const [fromLocation, setFromLocation] = useState('East Legon, Accra');
  const [toLocation, setToLocation] = useState('Cantonments, Accra');
  const [homeSize, setHomeSize] = useState('2-3 Bedroom Home');
  const [targetDate, setTargetDate] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onScrollToQuote();
  };

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden pt-8 pb-16 lg:py-20 border-b border-slate-800">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Metadata Strip */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-400 mb-6 tracking-wide">
          <span className="flex items-center gap-1.5 text-amber-400 font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Ayawaso District, Greater Accra</span>
          </span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span>All 16 Ghana Regions</span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span className="text-emerald-400 font-semibold">50+ Global Countries</span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span className="text-blue-400 font-bold">Full-Value Protection</span>
        </div>

        {/* 2-Column Grid: Headline & Poawk Property Movers In-Hero Instant Quote Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Poawk Property Movers Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE POAWK MOVING STANDARD IN ACCRA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] [text-wrap:balance]">
              Moving Made Easy. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
                Every Step of the Way.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Whether you are moving across Accra neighborhoods, inter-region across Ghana, or relocating overseas, Poawk Property Movers pairs certified uniformed crews and enclosed trucks with binding, transparent quotes.
            </p>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Binding Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Virtual Video Surveys</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Permanent Uniformed Staff</span>
              </div>
            </div>

            {/* Visual Preview of Branded Moving Truck */}
            <div className="pt-2 relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
              <img
                src="/src/assets/images/hero_truck_poawk_1793740555389.jpg"
                alt="Poawk Property Movers branded moving truck and uniformed crew in Accra Ghana"
                className="w-full h-44 sm:h-52 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-2xs text-slate-300">
                <span className="font-semibold text-white">Poawk Weatherproof Fleet · Tail-Lift Enclosed Units</span>
                <span className="font-mono text-amber-400 font-bold">Ayawaso Accra Operations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Poawk Property Movers In-Hero Quote Intake Widget */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-200 relative">
            
            <div className="mb-5 pb-4 border-b border-slate-100">
              <span className="text-2xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                POAWK PROPERTY MOVERS INSTANT ESTIMATOR
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mt-0.5">
                Start Your Free Move Estimate
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Calculate approximate costs in Ghanaian Cedis (GH₵) & USD ($) with zero obligation.
              </p>
            </div>

            {/* Move Type Selector Tabs */}
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl mb-5 text-2xs font-bold text-center">
              <button
                type="button"
                onClick={() => setHeroMoveType('residential')}
                className={`py-2 px-1 rounded-lg transition-all cursor-pointer ${
                  heroMoveType === 'residential'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Residential
              </button>
              <button
                type="button"
                onClick={() => setHeroMoveType('corporate')}
                className={`py-2 px-1 rounded-lg transition-all cursor-pointer ${
                  heroMoveType === 'corporate'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Corporate Office
              </button>
              <button
                type="button"
                onClick={() => setHeroMoveType('small-move')}
                className={`py-2 px-1 rounded-lg transition-all cursor-pointer ${
                  heroMoveType === 'small-move'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                SnapMove™
              </button>
            </div>

            <form onSubmit={handleHeroSubmit} className="space-y-3.5">
              
              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Moving From (Accra Neighborhood or Region)
                </label>
                <input
                  type="text"
                  required
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  placeholder="e.g. East Legon, Cantonments, Airport Residential"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Moving To (Destination City or Country)
                </label>
                <input
                  type="text"
                  required
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  placeholder="e.g. Cantonments, Kumasi, London UK"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Home / Office Size
                  </label>
                  <select
                    value={homeSize}
                    onChange={(e) => setHomeSize(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option>Studio / 1-Bedroom</option>
                    <option>2-3 Bedroom Home</option>
                    <option>4+ Bedroom Villa</option>
                    <option>Commercial Office</option>
                  </select>
                </div>

                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Approx. Move Date
                  </label>
                  <input
                    type="date"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  />
                </div>
              </div>

              {/* Poawk Property Movers Call To Action */}
              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-black rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer"
              >
                <span>Calculate My Moving Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Virtual Survey Secondary Button */}
              <button
                type="button"
                onClick={onOpenVirtualSurvey}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Video className="w-3.5 h-3.5 text-blue-600" />
                <span>Or Schedule a Virtual Video Survey</span>
              </button>

            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-2xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>No Credit Card Required</span>
              </span>
              <a href="tel:+233240977141" className="font-bold text-slate-800 hover:text-blue-600">
                Call: +233 24 097 7141
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
