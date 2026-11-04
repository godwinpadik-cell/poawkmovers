import React from 'react';
import { Truck, Phone, MapPin, Globe, Linkedin, ArrowUp, ShieldCheck, Video, Search } from 'lucide-react';

interface FooterProps {
  onOpenTracking: () => void;
  onOpenVirtualSurvey: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTracking,
  onOpenVirtualSurvey,
  onOpenQuote
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top Pre-Footer Callout */}
      <div className="bg-blue-900/60 border-b border-blue-800/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 text-white">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base">
                Ready to Plan Your Relocation with Certified Professionals?
              </div>
              <div className="text-2xs text-blue-200">
                Experience transparent binding pricing, enclosed weatherproof trucks, and dedicated move coordinators.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer"
            >
              Get Free Estimate
            </button>
            <button
              onClick={onOpenVirtualSurvey}
              className="px-4 py-2.5 bg-blue-800/80 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer"
            >
              Schedule Virtual Survey
            </button>
          </div>
        </div>
      </div>

      {/* Main Directory Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 text-white font-extrabold text-lg tracking-tight">
              <img
                src="/logo.jpg"
                alt="Poawk Property Movers Official Logo"
                className="w-12 h-12 object-contain rounded-xl bg-white p-1 border border-slate-700 shadow-sm shrink-0"
              />
              <div>
                <span className="block leading-tight font-black">Poawk Property Movers</span>
                <span className="block text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                  What Can't We Move?
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Accra's premier full-service moving and relocation company. Providing residential moving, corporate transfers, sensitive healthcare logistics, and ocean/air freight to 50+ countries.
            </p>
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-xs">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Ayawaso District, Greater Accra Region, Ghana</span>
            </div>
          </div>

          {/* Moving Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3 font-mono">
              Moving Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Local Greater Accra Moves</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Long-Distance Inter-Region</a></li>
              <li><a href="#moving-packages" className="hover:text-white transition-colors">SnapMove™ Small Moves</a></li>
              <li><a href="#moving-packages" className="hover:text-white transition-colors">Full-Service Packing</a></li>
              <li><a href="#moving-packages" className="hover:text-white transition-colors">Full-Value White-Glove</a></li>
              <li><a href="#sic-hospital" className="hover:text-white transition-colors">Healthcare & Lab Moves</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Global Freight (50+ Countries)</a></li>
            </ul>
          </div>

          {/* Planning & Tools */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3 font-mono">
              Planning & Tools
            </h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">5-Step Moving Process</a></li>
              <li><a href="#move-checklist" className="hover:text-white transition-colors">8-Week Moving Checklist</a></li>
              <li><button onClick={onOpenVirtualSurvey} className="hover:text-white transition-colors cursor-pointer text-left">Virtual Home Survey</button></li>
              <li><button onClick={onOpenTracking} className="hover:text-white transition-colors cursor-pointer text-left">Track My Move</button></li>
              <li><a href="#inventory-calculator" className="hover:text-white transition-colors">Room CBM Calculator</a></li>
              <li><a href="#quote-estimator" className="hover:text-white transition-colors">Binding Cost Estimator</a></li>
            </ul>
          </div>

          {/* Contact & Verification */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3 font-mono">
              Dispatch Desk
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+233240977141" className="text-white hover:text-blue-400 font-bold transition-colors block text-sm">
                  +233 (0) 24 097 7141
                </a>
                <span className="text-slate-500 text-2xs">Chief Dispatch & Customer Care</span>
              </li>
              <li>
                <button
                  onClick={onOpenTracking}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Track Active Move Status</span>
                </button>
              </li>
              <li>
                <a
                  href="https://gh.linkedin.com/in/oawk-property-movers-176307234"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://oawkpropertymovers.website2.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>Web Portal</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Consumer Protection Notice */}
        <div className="pt-8 pb-6 border-t border-slate-900 text-slate-500 text-2xs space-y-2 leading-relaxed">
          <p>
            <strong>Consumer Protection & Pricing Policy:</strong> Poawk Property Movers operates under certified commercial carriage standards in Ghana. All moving estimates are based on customer inventory and verified through in-home or virtual video surveys to establish binding tariffs with zero surprise surcharges on moving day. Full-Value Protection is available across all residential, corporate, and healthcare consignments.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-2xs">
          <div>
            © {new Date().getFullYear()} Poawk Property Movers. All rights reserved. Ayawaso District, Accra, Ghana.
          </div>

          <div className="flex items-center gap-4">
            <span>Ayawaso Operations Desk</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
