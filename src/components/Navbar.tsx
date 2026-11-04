import React, { useState } from 'react';
import { Phone, Video, Search, Calendar, ChevronDown, Shield, MapPin, Truck } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenTracking: () => void;
  onOpenVirtualSurvey: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenQuote, 
  onOpenTracking, 
  onOpenVirtualSurvey 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      
      {/* Poawk Property Movers Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-2xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left utility items */}
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3 h-3 text-blue-400" />
              <span>Ayawaso District, Greater Accra</span>
            </span>
            <span className="hidden md:inline" aria-hidden="true">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-400 font-medium">
              <Shield className="w-3 h-3" />
              <span>Full-Value Protection Included</span>
            </span>
          </div>

          {/* Right utility items: Track, Video Survey, Phone */}
          <div className="flex items-center gap-4 font-medium">
            <button
              onClick={onOpenVirtualSurvey}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Video className="w-3 h-3 text-blue-400" />
              <span>Virtual Home Survey</span>
            </button>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <button
              onClick={onOpenTracking}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Search className="w-3 h-3 text-blue-400" />
              <span>Track My Move</span>
            </button>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <a
              href="tel:+233240977141"
              className="text-amber-400 font-bold hover:text-amber-300 flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>+233 (0) 24 097 7141</span>
            </a>
          </div>

        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 h-20">
        
        {/* Brand Wordmark & Official Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 text-slate-900 font-extrabold text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0 group"
        >
          <img
            src="/logo.jpg"
            alt="Poawk Property Movers Logo"
            className="w-11 h-11 object-contain rounded-xl border border-slate-200/90 shadow-xs bg-white p-0.5 group-hover:scale-105 transition-transform shrink-0"
          />
          <div>
            <span className="block leading-none text-slate-950 font-black">
              Poawk Property Movers
            </span>
            <span className="block text-[10px] font-mono tracking-wider text-blue-600 font-bold uppercase mt-1">
              What Can't We Move?
            </span>
          </div>
        </a>

        {/* Primary Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-700">
          <a href="#services" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Moving Services
          </a>
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            How It Works
          </a>
          <a href="#moving-packages" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Moving Packages
          </a>
          <a href="#move-checklist" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            8-Week Checklist
          </a>
          <a href="#sic-hospital" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Why Poawk
          </a>
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenTracking}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-bold text-slate-700 hover:text-blue-600 border border-slate-300 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Truck className="w-3.5 h-3.5 text-blue-600" />
            <span>Track Order</span>
          </button>

          {/* Primary High-Contrast Quote Button */}
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer uppercase tracking-wider"
          >
            GET A QUOTE
          </button>
        </div>

      </div>
    </header>
  );
};
